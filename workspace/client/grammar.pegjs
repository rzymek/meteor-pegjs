// line block
start = line:(codeBlock / headerItem / taskItem / listItem / textItem) {
 return line;
}

// code block
codeBlock = t:tab* ("'''" / "```") {
 return {
  level: t.length,
  type: "code",
  typeCode: 4
 };
}

// task item
taskItem = t:tab* c:("[" bullet? space? "]") space* word+ {
 return {
  level: t.length,
  type: "task",
  typeCode: 3,
  content: c.map(function (item) {if (item) return item;}).join("")
 };
}

// list item
listItem = t:tab* c:(bullet / int+ "."? ")"?) space* word+ {
 return {
  level: t.length,
  type: "list",
  typeCode: 2,
  content: c.length > 1 ? c.join("") : c
 };
}

// header item
headerItem = t:tab* c:("#")+ space* word+ {
 return {
  level: t.length,
  type: "header",
  typeCode: 1,
  content: c.join("")
 }
}

// text item
textItem = t:tab* space* word+ {
 return {
  level: t.length,
  type: "text",
  typeCode: 0
 }
}

// BASIC STRUCTURE //
space = " "
lb = "\n"
tab = "\t" / "  "
bullet = [-0o*+]
char = [a-zA-Z()_#@*$.;,:!&{}\"]
int = [0-9]
word = w:(char / int)+ space? { return w.join(""); }


