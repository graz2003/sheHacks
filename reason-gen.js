const cohere = require('cohere-ai');
cohere.init('r4zPIup5DHKVKofsQEXkdLjmBSogAJZWheEyVjs6');
(async () => {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt: '--\nNeeds: There is only 1 orange available. I want to eat this orange. \nPlayer 1 Key reasons: I am thirsty and I would like to drink juice. \nPlayer 2 Key reasons: I want to bake a cake which uses oranges in the recipe. \n--\nNeeds: There is only 1 person that can have the cash. I want the $400 dollars. \nPlayer 1 Key reasons: I need to buy a new car. \nPlayer 2 Key reasons: I need to buy a new computer for school. \n--\nNeeds: Only 1 team can win. I want to win the competition.\nPlayer 1 Key reasons: I want to win and potentially get a job. \nPlayer 2 Key reasons: I want to win the cash prize.\n--\nNeeds: There is a single taxi available. I want to take the taxi.\nPlayer 1 Key reasons: I need to get to work. \nPlayer 2 Key reasons: I need to get to the store.\n--\nNeeds: There is only plane ticket left. I want the plane ticket.\nPlayer 1 Key reasons: I need to get to a wedding. \nPlayer 2 Key reasons: I need to get to a funeral.\n--\nNeeds: There is only one spot to get into computer science program. I want to get into the program.\nPlayer 1 Key reasons: I want to help people. \nPlayer 2 Key reasons: I want to get a good job.\n--\nNeeds: ',
    max_tokens: 100,
    temperature: 0.7,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
  });
  console.log(`Prediction: ${response.body.generations[0].text}`);
})();

var string = ${response.body.generations[0].text}.split(/\n/);
console.log(string);



