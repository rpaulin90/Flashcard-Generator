/**
 * Created by rpaulin on 5/15/17.
 */

/// This file is used to keep the definition of all constructors

exports.BasicCard = function BasicCard(front,back){
    if(this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    }
    else{
        return new BasicCard(front,back);
    }

};


exports.ClozeCard = function ClozeCard(text,cloze){

    if(this instanceof ClozeCard) {
        if (text.indexOf(cloze) >= 0) {
            this.text = text;
            this.cloze = cloze;
            this.partial = text.replace(cloze, "...")
        }
        else {
            this.text = "error, " + cloze + " is not part of the text: " + text;
            this.cloze = "error, " + cloze + " is not part of the text: " + text;
            this.partial = "error, " + cloze + " is not part of the text: " + text
        }
    }
    else{
        return new ClozeCard(text,cloze);
    }

};









// exports.BasicCard = function BasicCard(front,back){
//     if(this instanceof BasicCard) {
//         this.front = front;
//         this.back = back;
//     }
//     else{
//         return new BasicCard(front,back);
//     }
//
// };


// exports.ClozeCard = function ClozeCard(text,cloze){
//
//     if(this instanceof ClozeCard) {
//         if (text.indexOf(cloze) >= 0) {
//             this.text = text;
//             this.cloze = cloze;
//             this.partial = text.replace(cloze, "...")
//         }
//         else {
//             this.text = "error, " + cloze + " is not part of the text: " + text;
//             this.cloze = "error, " + cloze + " is not part of the text: " + text;
//             this.partial = "error, " + cloze + " is not part of the text: " + text
//         }
//     }
//     else{
//         return new ClozeCard(text,cloze);
//     }
//
// };
