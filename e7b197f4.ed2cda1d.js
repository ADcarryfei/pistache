(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(88)),o={title:"Headers"},s={unversionedId:"headers",id:"headers",isDocsHomePage:!1,title:"Headers",description:"Overview",source:"@site/docs/headers.md",slug:"/headers",permalink:"/docs/headers",editUrl:"https://github.com/pistacheio/pistache/edit/master/pistache.io/docs/headers.md",version:"current",sidebar:"leftSidebar",previous:{title:"Asynchronous HTTP programming",permalink:"/docs/asynchronous-http-programming"},next:{title:"Routing",permalink:"/docs/routing"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Defining your own header",id:"defining-your-own-header",children:[]},{value:"MIME types",id:"mime-types",children:[]}],c={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Inspired by the ",Object(i.b)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust")," eco-system and ",Object(i.b)("a",{parentName:"p",href:"https://hyper.rs"},"Hyper"),", HTTP headers are represented as ",Object(i.b)("em",{parentName:"p"},"type-safe")," plain objects. Instead of representing headers as a pair of ",Object(i.b)("inlineCode",{parentName:"p"},"(key: string, value: value)"),", the choice has been made to represent them as plain objects. This greatly reduces the risk of typo errors that can not catched by the compiler with plain old strings."),Object(i.b)("p",null,"Instead, objects give the compiler the ability to catch errors directly at compile-time, as the user can not add or request a header through its name: it has to use the whole ",Object(i.b)("strong",{parentName:"p"},"type"),". Types being enforced at compile-time, it helps reducing common typo errors."),Object(i.b)("p",null,"With Pistache, each HTTP Header is a class that inherits from the ",Object(i.b)("inlineCode",{parentName:"p"},"Http::Header")," base class and use the ",Object(i.b)("inlineCode",{parentName:"p"},"NAME()")," macro to define the name of the header. List of all headers inside an HTTP request or response are stored inside an internal ",Object(i.b)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/container/unordered_map"},Object(i.b)("inlineCode",{parentName:"a"},"std::unordered_map")),", wrapped in an ",Object(i.b)("inlineCode",{parentName:"p"},"Header::Collection")," class. Invidual headers can be retrieved or added to this object through the whole type of the header:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"auto headers = request.headers();\nauto ct = headers.get<Http::Header::ContentType>();\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"get<H>")," will return a ",Object(i.b)("inlineCode",{parentName:"p"},"std::shared_ptr<H>")," where ",Object(i.b)("inlineCode",{parentName:"p"},"H: Header")," (",Object(i.b)("inlineCode",{parentName:"p"},"H")," inherits from ",Object(i.b)("inlineCode",{parentName:"p"},"Header"),"). If the header does not exist, ",Object(i.b)("inlineCode",{parentName:"p"},"get<H>")," will throw an exception. ",Object(i.b)("inlineCode",{parentName:"p"},"tryGet<H>")," provides a non-throwing alternative that, instead, returns a null pointer."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Built-in headers")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Headers provided by Pistache live in the ",Object(i.b)("inlineCode",{parentName:"p"},"Http::Header")," namespace"))),Object(i.b)("h2",{id:"defining-your-own-header"},"Defining your own header"),Object(i.b)("p",null,"Common headers defined by the HTTP RFC (",Object(i.b)("a",{parentName:"p",href:"https://pretty-rfc.herokuapp.com/RFC2616"},"RFC2616"),") are already implemented and available. However, some APIs might define extra headers that do not exist in Pistache. To support your own header types, you can define and register your own HTTP Header by first declaring a class that inherits the ",Object(i.b)("inlineCode",{parentName:"p"},"Http::Header")," class:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"class XProtocolVersion : public Http::Header {\n};\n")),Object(i.b)("p",null,"Since every header has a name, the ",Object(i.b)("inlineCode",{parentName:"p"},"NAME()")," macro must be used to name the header properly:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'class XProtocolVersion : public Http::Header {\n    NAME("X-Protocol-Version")\n};\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Http::Header")," base class provides two virtual methods that you must override in your own implementation:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"void parse(const std::string& data);\n")),Object(i.b)("p",null,"This function is used to parse the header from the string representation. Alternatively, to avoid allocating memory for the string representation, a ",Object(i.b)("em",{parentName:"p"},"raw")," version can be used:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"void parseRaw(const char* str, size_t len);\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"str")," will directly point to the header buffer from the raw http stream. The len parameter is the total length of the header's value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"void write(std::ostream& stream) const\n")),Object(i.b)("p",null,"When writing the response back to the client, the ",Object(i.b)("inlineCode",{parentName:"p"},"write")," function is used to serialize the header into the network buffer."),Object(i.b)("p",null,"Let\u2019s combine these functions together to finalize the implementation of our previously declared header:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'class XProtocolVersion : public Http::Header {\npublic:\n\n    NAME("X-Protocol-Version")\n\n    XProtocolVersion()\n     : minor(-1)\n     , major(-1)\n    { }\n\n    void parse(const std::string& data) {\n        auto pos = data.find(\'.\');\n        if (pos != std::string::npos) {\n            minor = std::stoi(data.substr(0, pos));\n            major = std::stoi(data.substr(pos + 1));\n        }\n    }\n\n    void write(std::ostream& os) const {\n        os << minor << "." << major;\n    }\nprivate:\n    int minor;\n    int major;\n};\n')),Object(i.b)("p",null,"And that\u2019s it. Now all we have to do is registering the header to the registry system:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Header::Registry::registerHeader<XProtocolVersion>();\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Header instantation")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You should always provide a default constructor for your header so that it can be instantiated by the registry system"))),Object(i.b)("p",null,"Now, the ",Object(i.b)("inlineCode",{parentName:"p"},"XProtocolVersion")," can be retrieved and added like any other header in the ",Object(i.b)("inlineCode",{parentName:"p"},"Header::Collection")," class."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Unknown headers")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Headers that are not known to the registry system are stored as a raw pair of strings in the ",Object(i.b)("inlineCode",{parentName:"p"},"Collection")," class. ",Object(i.b)("inlineCode",{parentName:"p"},"getRaw()")," can be used to retrieve a raw header:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'auto myHeader = request.headers().getRaw("x-raw-header");\nmyHeader.name() // x-raw-header\nmyHeader.value() // returns the value of the header as a string\n')))),Object(i.b)("h2",{id:"mime-types"},"MIME types"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Media_type"},"MIME Types")," (or Media Type) are also fully typed. Such types are for example used in an HTTP request or response to describe the data contained in the body of the message (",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type")," header, \u2026) and are composed of a ",Object(i.b)("em",{parentName:"p"},"type"),", ",Object(i.b)("em",{parentName:"p"},"subtype"),", and optional ",Object(i.b)("em",{parentName:"p"},"suffix")," and parameters."),Object(i.b)("p",null,"MIME Types are represented by the ",Object(i.b)("inlineCode",{parentName:"p"},"Mime::MediaType")," class, implemented in the ",Object(i.b)("inlineCode",{parentName:"p"},"mime.h")," header. A MIME type can be directly constructed from a string:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'auto mime = Http::Mime::MediaType::fromString("application/json");\n')),Object(i.b)("p",null,"However, to enforce type-safety, common types are all represented as enumerations:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Http::Mime::MediaType m1(Http::Mime::Type::Application, Http::Mime::Subtype::Json);\n")),Object(i.b)("p",null,"To avoid such a typing pain, a ",Object(i.b)("inlineCode",{parentName:"p"},"MIME")," macro is also provided:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"auto m1 = MIME(Application, Json);\n")),Object(i.b)("p",null,"For suffix MIMEs, use the special ",Object(i.b)("inlineCode",{parentName:"p"},"MIME3")," macro:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"auto m1 = MIME3(Application, Json, Zip);\n")),Object(i.b)("p",null,"If you like typing, you can also use the long form:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Http::Mime::MediaType m1(Http::Mime::Type::Application, Http::Mime::Subtype::Json, Http::Mime::Suffix::Zip);\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"toString()")," function can be used to get the string representation of a given MIME type:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"auto m1 = MIME(Text, Html);\nm1.toString(); // text/html\n")))}d.isMDXComponent=!0}}]);