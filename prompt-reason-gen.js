const cohere = require('cohere-ai');
cohere.init('r4zPIup5DHKVKofsQEXkdLjmBSogAJZWheEyVjs6');
(async () => {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt: 'Player 1 Needs: I want to decide on rent.\nPlayer 1 Key reasons: I can\'t afford anything higher than $400, I need to commute to work, I need to rent out to other people.\n\nPlayer 2 Needs: I want to decide on rent.\nPlayer 2 Key reasons: Market prices increased, I need to pay a higher morgage, I can find other rentors easily.\n--\nPlayer 1 Needs: I want to eat this orange. \nPlayer 1 Key reasons: I am thirsty and I would like to drink juice. \n\nPlayer 2 Needs: I want to eat this orange. \nPlayer 2 Key reasons: I want to bake a cake which uses oranges in the recipe. \n--\nPlayer 1 Needs: I want to have $400 dollars. \nPlayer 1 Key reasons: I need to buy a new car. \n\nPlayer 2 Needs: I want to have $400 dollars. \nPlayer 2 Key reasons: I need to buy a new computer for school. \n--\nPlayer 1 Needs: I want to eat at this restaurant.\nPlayer 1 Key reasons: I want to eat food. \nPlayer 2 Needs: I want to eat at this restaurant. \nPlayer 2 Key reasons: I would like to eat something sweet. \n--\nPlayer 1 Needs: I want to rent out my house.\nPlayer 1 Key reasons: I need a lot of money to buy a new car. \nPlayer 2 Needs: I want to rent out my house. \nPlayer 2 Key reasons: I want to find a place to live. \n--',
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
