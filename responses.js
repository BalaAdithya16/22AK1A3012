function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "what is my name") {
        return "Adithya";
    } else if (input == "where am i") {
        return "AITS TPT";
    } else if (input == "goodbye") {
        return "bye bye";
    }
      else if(input == "who is joseph") {
        return "joseph is gay";
      }
    else {
        return "Try asking something else!";
    }
}
