!function(){function n(n){return n&&n.__esModule?n.default:n}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},o=s.parcelRequired7c6;null==o&&((o=function(n){if(n in i)return i[n].exports;if(n in t){var s=t[n];delete t[n];var o={id:n,exports:{}};return i[n]=o,s.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,s){t[n]=s},s.parcelRequired7c6=o);var a=o("bpxeT"),e=o("2TvXO"),l=o("6LkHx"),c=o("fdsSQ"),r=[];function p(){window.innerWidth;r=(0,c.getStoredItems)()||[];var n=document.querySelector(".shopping-empty-container");0!==r.length?n.classList.add("visually-hidden"):n.classList.remove("visually-hidden")}function d(n){var s=n.buy_links,i=document.querySelector(".shopping-list-cardlist"),t=document.createElement("li");t.classList.add("shopping-list-card");'\n      <img class="shopping-list-cardlogo" src="'.concat(n.book_image,'" alt="book-logo" />\n      <div class="shopping-list-fullinfo">\n        <div class="shopping-list-cardheader">\n          <div class="cardheader-titlecontainer">\n            <h3 class="shopping-list-cardtitle">').concat(n.title,'</h3>\n            <h4 class="shopping-list-cardcategory">').concat(n.list_name,'</h4>\n          </div>\n          <button class="deletecard">Х</button>\n        </div>\n        <p class="shopping-list-carddescription">').concat(n.description,'</p>\n        <div class="shopping-list-cardfooter">\n          <h4 class="shopping-list-cardauthor">').concat(n.author,'</h4>\n          <ul class="shopping-list-shops">\n            ').concat(void n.shops,"\n          </ul>\n        </div>\n      </div>\n  ");var o='\n  <img\n                class="shopping-list-cardlogo"\n                src="'.concat(n.book_image,'"\n                alt="book-logo"\n              />\n              <div class="shopping-list-fullinfo">\n                <div class="shopping-list-cardheaer">\n                  <div class="cardheaer-tittlecontainer">\n                    <h3 class="shopping-list-cardtitle">').concat(n.title,'</h3>\n                    <h4 class="shopping-list-cardcategory">\n                      ').concat(n.list_name,'\n                    </h4>\n                  </div>\n                  <button class="deletecard">\n                  </button>\n                </div>\n                <p class="shopping-list-carddescription">\n                  ').concat(n.description,'\n                </p>\n                <div class="shopping-list-cardfooter">\n                  <h4 class="shopping-list-cardauthor">').concat(n.author,'</h4>\n                  <ul class="shopping-list-shops">\n                    <li class="shopping-list-shopsitem">\n                      <a href="').concat(s[0].url,'" class="shopping-list-shopslink">\n                        <img\n                          class="shopping-list-shopsicon1"\n                          src="/amazon.2cdbdfe6.png"\n                          alt="amazon"\n                          width="32px"\n                      />\n                      </a>\n                    </li>\n                    <li class="shopping-list-shopsitem">\n                      <a href="').concat(s[1].url,'" class="shopping-list-shopslink">\n                       <img\n                          class="shopping-list-shopsicon2"\n                          src="/appleBooks@1x.ea11771b.png"\n                          alt="amazon"\n                          width="16px"\n                      />\n                      </a>\n                    </li>\n                    <li class="shopping-list-shopsitem">\n                      <a href="').concat(s[4].url,'" class="shopping-list-shopslink">\n                        <img\n                          class="shopping-list-shopsicon2"\n                          src="/booksAMillion@1x.89ef278d.png"\n                          alt="amazon"\n                          width="16px"\n                      />\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n  ');t.innerHTML+=o,t.addEventListener("click",g.bind({card:t,id:n._id})),i.append(t)}function h(){return(h=n(a)(n(e).mark((function s(){var i,t,o;return n(e).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:document.querySelector(".shopping-list-cardlist").innerHTML="",i=[],t=0;case 4:if(!(t<r.length)){n.next=12;break}return n.next=7,(0,l.getBookById)(r[t]);case 7:(o=n.sent)&&i.push(o.data);case 9:t++,n.next=4;break;case 12:console.log(i),i.forEach((function(n){d(n)}));case 14:case"end":return n.stop()}}),s)})))).apply(this,arguments)}function g(n){(n.target.classList.contains("deletecard")||n.target.classList.contains("shopping-list-icon"))&&((0,c.deleteFromStorage)(this.id),this.card.remove()),p()}p(),function(){h.apply(this,arguments)}()}();
//# sourceMappingURL=shoplist.33fb143f.js.map
