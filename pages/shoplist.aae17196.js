var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},t=s.parcelRequired7c6;null==t&&((t=function(s){if(s in n)return n[s].exports;if(s in i){var t=i[s];delete i[s];var o={id:s,exports:{}};return n[s]=o,t.call(o.exports,o,o.exports),o.exports}var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(s,n){i[s]=n},s.parcelRequired7c6=t);var o=t("3Z7eX"),e=t("cR7As");let l=[];function a(){window.innerWidth;l=(0,e.getStoredItems)()||[];const s=document.querySelector(".shopping-empty-container");0!==l.length?s.classList.add("visually-hidden"):s.classList.remove("visually-hidden")}function c(s){const{buy_links:n}=s,i=document.querySelector(".shopping-list-cardlist"),t=document.createElement("li");t.classList.add("shopping-list-card");s.book_image,s.title,s.list_name,s.description,s.author,s.shops;const o=`\n  <img\n                class="shopping-list-cardlogo"\n                src="${s.book_image}"\n                alt="book-logo"\n              />\n              <div class="shopping-list-fullinfo">\n                <div class="shopping-list-cardheaer">\n                  <div class="cardheaer-tittlecontainer">\n                    <h3 class="shopping-list-cardtitle">${s.title}</h3>\n                    <h4 class="shopping-list-cardcategory">\n                      ${s.list_name}\n                    </h4>\n                  </div>\n                  <button class="deletecard">\n                  </button>\n                </div>\n                <p class="shopping-list-carddescription">\n                  ${s.description}\n                </p>\n                <div class="shopping-list-cardfooter">\n                  <h4 class="shopping-list-cardauthor">${s.author}</h4>\n                  <ul class="shopping-list-shops">\n                <li class="shopping-list-shopsitem">\n                  <a href="${n[0].url}" class="shopping-list-shopslink">\n                    <div class="shopping-list-shopsicon1"></div>\n                  </a>\n                </li>\n                <li class="shopping-list-shopsitem">\n                  <a href="${n[1].url}" class="shopping-list-shopslink">\n                    <div class="shopping-list-shopsicon2"></div>\n                  </a>\n                </li>\n                <li class="shopping-list-shopsitem">\n                  <a href="${n[4].url}" class="shopping-list-shopslink">\n                    <div class="shopping-list-shopsicon3"></div>\n                  </a>\n                </li>\n                  </ul>\n                </div>\n              </div>\n  `;t.innerHTML+=o,t.addEventListener("click",r.bind({card:t,id:s._id})),i.append(t)}function r(s){(s.target.classList.contains("deletecard")||s.target.classList.contains("shopping-list-icon"))&&((0,e.deleteFromStorage)(this.id),this.card.remove()),a()}a(),async function(){document.querySelector(".shopping-list-cardlist").innerHTML="";const s=[];for(let n=0;n<l.length;n++){const i=await(0,o.getBookById)(l[n]);i&&s.push(i.data)}console.log(s),s.forEach((s=>{c(s)}))}();
//# sourceMappingURL=shoplist.aae17196.js.map
