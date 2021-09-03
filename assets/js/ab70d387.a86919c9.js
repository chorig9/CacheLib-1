"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1941],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return a?o.createElement(p,r(r({ref:t},u),{},{components:a})):o.createElement(p,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7568:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=a(7462),n=a(3366),i=(a(7294),a(3905)),r=["components"],s={id:"faq",title:"FAQ"},l=void 0,c={unversionedId:"Cache_Library_User_Guides/faq",id:"Cache_Library_User_Guides/faq",isDocsHomePage:!1,title:"FAQ",description:"My cache instance is broken. Help!",source:"@site/docs/Cache_Library_User_Guides/faq.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/faq",permalink:"/docs/Cache_Library_User_Guides/faq",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/faq.md",version:"current",frontMatter:{id:"faq",title:"FAQ"},sidebar:"userguideSidebar",previous:{title:"Visit data in cache",permalink:"/docs/Cache_Library_User_Guides/Visit_data_in_cache"},next:{title:"Item and ItemHandle",permalink:"/docs/Cache_Library_User_Guides/Item_and_ItemHandle"}},u=[{value:"My cache instance is broken. Help!",id:"my-cache-instance-is-broken-help",children:[{value:"Why my cache is not persisted after process restart?",id:"why-my-cache-is-not-persisted-after-process-restart",children:[]},{value:"Why do I see allocation failures?",id:"why-do-i-see-allocation-failures",children:[]},{value:"Why do I see invalid allocs?",id:"why-do-i-see-invalid-allocs",children:[]},{value:"Why is my cache so slow?",id:"why-is-my-cache-so-slow",children:[]},{value:"My application crashed. It takes forever to core dump.",id:"my-application-crashed-it-takes-forever-to-core-dump",children:[]},{value:"I update certain items in my cache frequently (from some refill logic), but I do not want them to be seen as hotter than other items in my cache which are updated less frequently but read just as frequently. What can I do?",id:"i-update-certain-items-in-my-cache-frequently-from-some-refill-logic-but-i-do-not-want-them-to-be-seen-as-hotter-than-other-items-in-my-cache-which-are-updated-less-frequently-but-read-just-as-frequently-what-can-i-do",children:[]},{value:"How do I use an item?",id:"how-do-i-use-an-item",children:[]},{value:"How much space does my item take?",id:"how-much-space-does-my-item-take",children:[]},{value:"How does eviction work?",id:"how-does-eviction-work",children:[]},{value:"What is slab rebalancing (and pool rebalancing, and pool resizing)?",id:"what-is-slab-rebalancing-and-pool-rebalancing-and-pool-resizing",children:[]},{value:"What does the term mean?",id:"what-does-the-term-mean",children:[]}]}],h={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"my-cache-instance-is-broken-help"},"My cache instance is broken. Help!"),(0,i.kt)("h3",{id:"why-my-cache-is-not-persisted-after-process-restart"},"Why my cache is not persisted after process restart?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Did your service used to recover cache fine? But it didn't recover in the newest release?")),(0,i.kt)("p",null,"This could be due to cachelib's Format Version changes. In the event of a cache format change, CacheLib Cache cannot persist its cache content across service upgrades."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Did you call ",(0,i.kt)("inlineCode",{parentName:"strong"},"CacheAllocator::shutDown()")," explicitly?")),(0,i.kt)("p",null,"CacheAllocator will destroy all shared memory segments if shutDown is not called before the object is destroyed."),(0,i.kt)("h3",{id:"why-do-i-see-allocation-failures"},"Why do I see allocation failures?"),(0,i.kt)("p",null,"It is normal to see some allocation failures over the lifetime of your cache. However this number should be very low (e.g., less than 0.001% of your allocation attempts). If the rate is high, it can be caused by the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You do not have any free slabs in certain allocation classes. To remedy this, you must enable slab rebalancing with the default policy (just ",(0,i.kt)("inlineCode",{parentName:"li"},"RebalancePolicy")," by itself). This will rebalance your memory according to the allocation failures."),(0,i.kt)("li",{parentName:"ol"},"You have very high number of allocation attempts and very low number of slabs in certain allocation classes (think 10K/s and only one or two slabs). Hence rate of evictions cannot keep up with the rate of allocations. To remedy this, you can enable ",(0,i.kt)("inlineCode",{parentName:"li"},"LruTailAge")," rebalance policy which would try to keep all allocation classes around similar eviction age.")),(0,i.kt)("h3",{id:"why-do-i-see-invalid-allocs"},"Why do I see invalid allocs?"),(0,i.kt)("p",null,"You're questing for allocation size that is bigger than the biggest allocation size your cache allows. Please check if you're customizing allocation class sizes and the biggest class size you've set. If you're not customizing them, then this means the size your item (size of key + size of value + 32 bytes) is bigger than 4 MB, which is the upper bound of what we allow into our cache. If you absolutely need to store such big values, use ",(0,i.kt)("a",{parentName:"p",href:"chained_items"},"chained items"),"."),(0,i.kt)("h3",{id:"why-is-my-cache-so-slow"},"Why is my cache so slow?"),(0,i.kt)("p",null,"Have you checked how your hash table is configured? In general the hash table size should be configured to be at least 1.5 times of the number of items you have in cache."),(0,i.kt)("h3",{id:"my-application-crashed-it-takes-forever-to-core-dump"},"My application crashed. It takes forever to core dump."),(0,i.kt)("p",null,"If you're using a cache that's tens of GB or more, it will take a while to finish dumping the core because it's so big. You can turn off dumping core for cache memory by passing in ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"setFullCoredump()")," method when you set up the cache. Beware that turning off core dump for cache memory means it will be near impossible to debug any buffer-overflow or use-after-free bugs in cache memory."),(0,i.kt)("h3",{id:"i-update-certain-items-in-my-cache-frequently-from-some-refill-logic-but-i-do-not-want-them-to-be-seen-as-hotter-than-other-items-in-my-cache-which-are-updated-less-frequently-but-read-just-as-frequently-what-can-i-do"},"I update certain items in my cache frequently (from some refill logic), but I do not want them to be seen as hotter than other items in my cache which are updated less frequently but read just as frequently. What can I do?"),(0,i.kt)("p",null,"If you know you're doing a mutation, pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessMode::kWrite")," when you call ",(0,i.kt)("inlineCode",{parentName:"p"},"find()")," on CacheAllocator. And configure LRU (or any other eviction policies you're using) to only promote for reads."),(0,i.kt)("h3",{id:"how-do-i-use-an-item"},"How do I use an item?"),(0,i.kt)("p",null,"Each item has a key and an value associated with it. Both the key and the value can be a string or a POD or anything that's memcpy-safe:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'auto myHandle = cache->find("I can find my item by using a key");\nfolly::StringPiece myString{myHandle.getMemory(), myHandle.getSize()};\nstd::cout << myString << std::endl;\n')),(0,i.kt)("p",null,"An item can also be looked up and used as a user-defined type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'struct MyStructure {\n  bool aBooleanField;\n  uint64_t[10] someIds;\n};\n\nauto myHandle = cache->find("I can find my item by using a key");\nauto myStruct = myHandle->getMemoryAs<MyStructure>();\n\nif (myStruct->aBooleanField == true) {\n  myStruct->someIds[5] == 7777777;\n}\n')),(0,i.kt)("h3",{id:"how-much-space-does-my-item-take"},"How much space does my item take?"),(0,i.kt)("p",null,"When you cache an item, it takes more space than just the number of bytes you intend to cache. That is, if you're trying to cache a structure ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo")," with a key ",(0,i.kt)("inlineCode",{parentName:"p"},'"HelloKeyForFoo"'),", the space required will be bigger or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},'sizeof(CacheType::Item) + sizeof("HelloKeyForFoo") + sizeof(Foo)'),"."),(0,i.kt)("p",null,"The reason the size is at least equal to the above should be obvious. We need space for not just ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo")," but also its key. We also need some additional space for the item header, which contains book-keeping information such as flags and references (yes, internally each item is ref-counted, quite similar to how one would implement a shared pointer)."),(0,i.kt)("p",null,"However, it may not be immediately obvious that sometimes your item can take up more space than it needs. This is because the memory allocator in cachelib does not give true variable sized allocations (not many do). Cachelib's memory allocator can be configured to support from 1 to 127 different allocation sizes (from a minimum of 64 bytes to a maximum of 4 MB). And when you request for N bytes, we will pick the smallest allocation size that will fit the entire space your item needs."),(0,i.kt)("h3",{id:"how-does-eviction-work"},"How does eviction work?"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"eviction_policy"},"Eviction Policy"),"."),(0,i.kt)("h3",{id:"what-is-slab-rebalancing-and-pool-rebalancing-and-pool-resizing"},"What is slab rebalancing (and pool rebalancing, and pool resizing)?"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"pool_rebalance_strategy"},"Pool Rebalance Strategy"),"."),(0,i.kt)("h3",{id:"what-does-the-term-mean"},"What does the term mean?"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"terms"},"Cache Library terminology"),"."))}d.isMDXComponent=!0}}]);