(function () {
  "use strict";
  var root = document.documentElement.dataset.root || "";
  var modal = document.getElementById("search-modal");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var indexed = null;
  function openSearch() {
    modal.hidden = false;
    input.focus();
    if (!indexed) {
      fetch(root + "search.json")
        .then(function (res) { if (!res.ok) throw new Error("Index unavailable"); return res.json(); })
        .then(function (data) { indexed = data; searchDocs(); })
        .catch(function () { results.textContent = "Search index unavailable. Use a local HTTP server to preview the site."; });
    }
  }
  function closeSearch() { modal.hidden = true; input.value = ""; }
  document.getElementById("search-toggle").addEventListener("click", openSearch);
  document.getElementById("search-close").addEventListener("click", closeSearch);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeSearch(); });
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
    if (e.key === "Escape") closeSearch();
  });
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("is-open");
  });
  function searchDocs() {
    if (!indexed) return;
    var terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    results.replaceChildren();
    if (!terms.length) {
      var hint = document.createElement("p"); hint.className = "search-help";
      hint.textContent = "Search titles and text in all documentation pages."; results.appendChild(hint); return;
    }
    var found = indexed.filter(function (page) {
      var haystack = (page.title + " " + page.text).toLowerCase();
      return terms.every(function (term) { return haystack.includes(term); });
    }).slice(0, 20);
    if (!found.length) { results.textContent = "No matching documents."; return; }
    found.forEach(function (page) {
      var a = document.createElement("a"); a.className = "result-link"; a.href = root + page.url;
      var title = document.createElement("div"); title.className = "result-title"; title.textContent = page.title;
      var excerpt = document.createElement("div"); excerpt.className = "result-snippet";
      var text = page.text || ""; var pos = text.toLowerCase().indexOf(terms[0]);
      excerpt.textContent = text.slice(Math.max(0, pos - 55), Math.max(0, pos - 55) + 155) + "…";
      a.appendChild(title); a.appendChild(excerpt); results.appendChild(a);
    });
  }
  input.addEventListener("input", searchDocs);

  document.querySelectorAll(".code-block").forEach(function (block) {
    var copy = block.querySelector(".copy-btn");
    var pre = block.querySelector("pre");
    var code = block.querySelector("code");
    copy.addEventListener("click", async function () {
      var value = code.textContent;
      try {
        await navigator.clipboard.writeText(value);
        copy.textContent = "Copied!";
      } catch (_) {
        var t = document.createElement("textarea"); t.value = value;
        document.body.appendChild(t); t.select();
        var success = document.execCommand("copy"); t.remove();
        copy.textContent = success ? "Copied!" : "Failed";
      }
      setTimeout(function () { copy.textContent = "Copy"; }, 1300);
    });
    var toggle = block.querySelector(".view-btn");
    if (!toggle) return;
    var tree = block.querySelector(".json-tree");
    var loaded = false;
    toggle.addEventListener("click", function () {
      if (!loaded) {
        var bytes = Uint8Array.from(atob(block.dataset.jsonB64), function (c) { return c.charCodeAt(0); });
        var data = JSON.parse(new TextDecoder().decode(bytes));
        tree.appendChild(makeTree(data, null)); loaded = true;
      }
      var showTree = tree.hidden;
      tree.hidden = !showTree; pre.hidden = showTree;
      toggle.textContent = showTree ? "Code View" : "Tree View";
    });
  });

  function makeTree(value, key) {
    var complex = value !== null && typeof value === "object";
    var node = document.createElement(complex ? "details" : "div");
    if (!complex) node.className = "leaf";
    var label = key === null ? "root" : String(key);
    if (complex) {
      var sum = document.createElement("summary");
      var name = document.createElement("span"); name.className = "key"; name.textContent = label;
      sum.appendChild(name);
      sum.appendChild(document.createTextNode(" : " + (Array.isArray(value) ? "Array" : "Object") + " (" + Object.keys(value).length + ")"));
      node.appendChild(sum);
      if (key === null) node.open = true;
      Object.entries(value).forEach(function (entry) { node.appendChild(makeTree(entry[1], entry[0])); });
    } else {
      var keyEl = document.createElement("span"); keyEl.className = "key"; keyEl.textContent = label + ": ";
      var valEl = document.createElement("span");
      valEl.className = value === null ? "null" : typeof value;
      valEl.textContent = JSON.stringify(value);
      node.appendChild(keyEl); node.appendChild(valEl);
    }
    return node;
  }
})();
