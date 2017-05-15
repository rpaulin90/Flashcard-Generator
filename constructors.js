/**
 * Created by rpaulin on 5/15/17.
 */

/// This file is used to keep the definition of all constructors

exports.BasicCard = function BasicCard(front,back){
    if(!(this instanceof BasicCard)) {
        return new BasicCard(front,back);
    }

    this.front = front;
    this.back = back;
};


// ClozeCard has two properties that are very similar to BasicCard (front,back ~ text,cloze)
// so we use BasicCard inside of the ClozeCard constructor to create those 2 properties

exports.ClozeCard = function ClozeCard(text,cloze){
    if(!(this instanceof ClozeCard)) {
        return new ClozeCard(text,cloze);
    }
    else if (text.indexOf(cloze) >= 0) {
        exports.BasicCard.apply(this,arguments);
        }

    else {
        exports.BasicCard.apply(this,arguments);
        this.error = true;
        }
};

// ClozeCard will share all the properties of BasicCard's prototype
// However, ClozeCard's prototype will have an additional method "partial"

exports.ClozeCard.prototype = new exports.BasicCard();

exports.ClozeCard.prototype.partial = function partial(){

    if (this.error === true) {
        var error = "error, " + this.back + " is not part of the text: " + this.front;
        return error;
    }
    var partialStr = this.front.replace(this.back, "...");

    return partialStr;

};












