const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [`What's your name? Nicknames are also acceptable :)`, `What's an activity you like doing?`, `What do you listen to while doing that?`, `Which meal is your favourite (eg: dinner, brunch, etc.)`, `What's your favourite thing to eat for that meal?`, `Which sport is your absolute favourite?`, `What is your superpower? In a few words, tell us what you are amazing at!`];

const survey = function (questionsArr){
  const answers = [];
  const questioner = function(index) {
    if(index === questionsArr.length) {
      console.log(`WASSUP DOGS, I'M ${answers[0]}, AND I LOVE ${answers[1]}! IT'S TOTALLY MY JAM TO JAM OUT TO ${answers[2]} WHILE ROCKIN' OUT EATING ${answers[4]} FOR ${answers[3]}! I'M A HELLA GOOD ${answers[5]} PLAYER. I TOTALLY COULD HAVE GONE PRO BUT I DECIDED TO DO ${answers[6]} INSTEAD.}`);
      return rl.close();
    } 
    rl.question(questionsArr[index], (answer) => {
      answers.push(answer);
      questioner(index + 1);
    });
  }
  const string = `This is answer ${answers[1]}`
  questioner(0);
  return string;
}

survey(questions);