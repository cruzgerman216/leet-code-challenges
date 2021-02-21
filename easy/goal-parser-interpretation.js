var interpret = function(command = "G()()()()(al)") {
   let str = "";
   let word = command;
   while(str != word){
    str = word;
    word = word.replace("()","o")
    word = word.replace("(al)","al")
   }
   return word;
};

interpret();
