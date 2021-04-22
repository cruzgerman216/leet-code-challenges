var checkIfPangram = function(sentence = "thequickbrownfoxjumpsoverthelazydog") {
    let total_characters = 26;
    let on = true;
    if(sentence.length < 26){
        return false;
    }
    for(let i = 0; i < 26; i++){
        if(!sentence.includes(String.fromCharCode(65+i).toLowerCase())){
            on = false; 
            break;
        }
    }

    return on;
};

console.log(checkIfPangram())