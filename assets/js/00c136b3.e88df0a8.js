"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4702],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=n[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2040:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"Remove_data_from_cache",title:"Remove data from cache"},l=void 0,m={unversionedId:"Cache_Library_User_Guides/Remove_data_from_cache",id:"Cache_Library_User_Guides/Remove_data_from_cache",isDocsHomePage:!1,title:"Remove data from cache",description:"To remove data from cache, call these methods declared in allocator/CacheAllocator.h:",source:"@site/docs/Cache_Library_User_Guides/Remove_data_from_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Remove_data_from_cache",permalink:"/docs/Cache_Library_User_Guides/Remove_data_from_cache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Remove_data_from_cache.md",version:"current",frontMatter:{id:"Remove_data_from_cache",title:"Remove data from cache"},sidebar:"UserGuideSideBar",previous:{title:"Read data from cache",permalink:"/docs/Cache_Library_User_Guides/Read_data_from_cache"},next:{title:"Visit data in cache",permalink:"/docs/Cache_Library_User_Guides/Visit_data_in_cache"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To remove data from cache, call these methods declared in allocator/CacheAllocator.h:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename CacheTrait>\nclass CacheAllocator : public CacheBase {\n  public:\n    // Remove the item with the specified key.\n    RemoveRes remove(Key key);\n\n    // Remove the item pointed to by the specified handle.\n    RemoveRes remove(const ItemHandle& handle);\n\n    // Remove the item pointed to by the specified iterator.\n    RemoveRes remove(AccessIterator& it);\n\n    // Remove the first chained item pointed to by the parent handle.\n    ItemHandle popChainedItem(const ItemHandle& parent)\n  ...\n};\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"RemoveRes")," is an enum class defined in allocator/CacheAllocator.h:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class RemoveRes : uint8_t {\n  kSuccess,\n  kNotFoundInRam,\n};\n")),(0,o.kt)("p",null,"For example, the following code removes an unchained item with key ",(0,o.kt)("inlineCode",{parentName:"p"},'"key1"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'auto rr = cache->remove("key1");\nif (rr == RemoveRes::kSuccess) {\n  std::cout << "Removed the item with key \\"key1\\"" << \'\\n\';\n}\n')),(0,o.kt)("p",null,"You can also remove the item as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'auto item_handle = cache->find("key1");\nif (item_handle) {\n  auto rr = cache->remove(item_handle);\n  if (rr == RemoveRes::kSuccess) {\n    std::cout << "Removed the item with key \\"key1\\"" << \'\\n\';\n  }\n}\n')),(0,o.kt)("p",null,"If you write the following three items to cache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'std::map<std::string, std::string> dict = {\n  { "key1", "item 1" },\n  { "key2", "item 2" },\n  { "key3", "item 3" },\n};\nfor (auto& itr : dict) {\n  auto item_handle = cache->allocate(pool_id, itr.first, itr.second.size());\n  std::memcpy(item_handle->getWritableMemory(), itr.first.data(), itr.second.size());\n  cache->insertOrReplace(item_handle);\n}\n')),(0,o.kt)("p",null,"you can call this method to remove the three items:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"RemoveRes remove(AccessIterator& it);\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto itr = cache->begin(); itr != cache->end(); ++itr) {\n  auto rr = cache->remove(itr);\n  if (rr == RemoveRes::kSuccess) {\n    cout << \"Removed the item\" << '\\n';\n  }\n}\n\n")),(0,o.kt)("p",null,"Consider the following chained items:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<graphviz>\ndigraph g {\n  rankdir = LR;\n  node [shape=box, style=filled, fontsize=10, fontname=Helvetica,];\n  p[label="parent"]\n  c1[label="item 1"]\n  c2[label="item 2"]\n  c3[label="item 3"]\n  p -> c1;\n  c1 -> c2;\n  c2 -> c3;\n}\n</graphviz>\n')),(0,o.kt)("p",null,"To remove the first chained item (",(0,o.kt)("inlineCode",{parentName:"p"},"item 1"),"), call the ",(0,o.kt)("inlineCode",{parentName:"p"},"popChainedItem()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"auto handle = cache->popChainedItem(parent_item_handle);\nif (handle) {\n  cout << \"Removed the first chained item\" << '\\n';\n}\n")),(0,o.kt)("p",null,"If you remove the parent item, all its chained items are also removed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"rr = cache->remove(parent_item_handle);\nif (rr == RemoveRes::kSuccess) {\n  parent_item_handle->reset();\n}\n")))}d.isMDXComponent=!0}}]);