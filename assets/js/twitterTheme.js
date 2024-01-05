const changeTwitterCardTheme = () => {
  const tweets = document.querySelectorAll('[data-tweet-id]');

  const changeTweetsTheme = () => {
    const storedTheme =
      localStorage.getItem('color-scheme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const targetTheme = storedTheme === 'dark' ? 'light' : 'dark';

    const switchTweetTheme = (currentTheme, targetTheme) => {
      tweets.forEach((tweet) => {
        const src = tweet.getAttribute('src');
        tweet.setAttribute('src', src.replace('theme=' + currentTheme, 'theme=' + targetTheme));
      });
    };

    switchTweetTheme(targetTheme, storedTheme);
  };

  if (tweets) {
    changeTweetsTheme();
  }
};

export { changeTwitterCardTheme };
