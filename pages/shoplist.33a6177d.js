var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},e=s.parcelRequired7c6;null==e&&((e=function(s){if(s in n)return n[s].exports;if(s in i){var e=i[s];delete i[s];var t={id:s,exports:{}};return n[s]=t,e.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+s+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(s,n){i[s]=n},s.parcelRequired7c6=e);var t=e("3Z7eX"),o=e("cR7As");let l=[];function a(){window.innerWidth;l=(0,o.getStoredItems)()||[];const s=document.querySelector(".shopping-empty-container");0!==l.length?s.classList.add("visually-hidden"):s.classList.remove("visually-hidden")}function p(s){const n=document.querySelector(".shopping-list-cardlist"),i=document.createElement("li");i.classList.add("shopping-list-card");s.book_image,s.title,s.list_name,s.description,s.author,s.shops;const e=`\n  <img\n                class="shopping-list-cardlogo"\n                src="${s.book_image}"\n                alt="book-logo"\n              />\n              <div class="shopping-list-fullinfo">\n                <div class="shopping-list-cardheaer">\n                  <div class="cardheaer-tittlecontainer">\n                    <h3 class="shopping-list-cardtitle">${s.title}</h3>\n                    <h4 class="shopping-list-cardcategory">\n                      ${s.list_name}\n                    </h4>\n                  </div>\n                  <button class="deletecard">\n                  </button>\n                </div>\n                <p class="shopping-list-carddescription">\n                  ${s.description}\n                </p>\n                <div class="shopping-list-cardfooter">\n                  <h4 class="shopping-list-cardauthor">${s.author}</h4>\n                  <ul class="shopping-list-shops">\n                    <li class="shopping-list-shopsitem">\n                      <a href="${s.amazon_product_url}" class="shopping-list-shopslink">\n                        <svg\n                          class="shopping-list-shopsicon1"\n                          width="32px"\n                          height="11px"\n                        >\n                          <use href="./sprite.svg#icon-amazon"></use>\n                        </svg>\n                      </a>\n                    </li>\n                    <li class="shopping-list-shopsitem">\n                      <a href="" class="shopping-list-shopslink">\n                        <svg\n                          class="shopping-list-shopsicon2"\n                          width="16px"\n                          height="16px"\n                        >\n                          <use href="../images/sprite.svg#icon-bookshop1"></use>\n                        </svg>\n                      </a>\n                    </li>\n                    <li class="shopping-list-shopsitem">\n                      <a href="" class="shopping-list-shopslink">\n                        <svg\n                          class="shopping-list-shopsicon2"\n                          width="16px"\n                          height="16px"\n                        >\n                          <use href="../images/sprite.svg#icon-bookshop2"></use>\n                        </svg>\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n  `;i.innerHTML+=e,i.addEventListener("click",c.bind({card:i,id:s._id})),n.append(i)}function c(s){(s.target.classList.contains("deletecard")||s.target.classList.contains("shopping-list-icon"))&&((0,o.deleteFromStorage)(this.id),this.card.remove()),a()}a(),async function(){document.querySelector(".shopping-list-cardlist").innerHTML="";const s=[];for(let n=0;n<l.length;n++){const i=await(0,t.getBookById)(l[n]);i&&s.push(i.data)}console.log(s),s.forEach((s=>{p(s)}))}();
//# sourceMappingURL=shoplist.33a6177d.js.map
