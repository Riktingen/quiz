const rulesButton = document.getElementById('rulesButton');
  rulesButton.addEventListener('click', showRules);

  function showRules() {
    const overlay = document.createElement('div');
    overlay.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-gray-900', 'bg-opacity-50', 'flex', 'justify-center', 'items-center');

    const rulesContainer = document.createElement('div');
    rulesContainer.classList.add('bg-white', 'p-4', 'rounded', 'max-w-md');

    const rulesText = document.createElement('p');
    rulesText.classList.add('text-lg', 'mb-4');
    rulesText.textContent = "Er zijn 10 vragen";

    const audioText = document.createElement('p');
    audioText.classList.add('text-lg', 'mb-4');
    audioText.textContent = "De vragen hebben een audio waar je naar moet luisteren";

    const audioLengthText = document.createElement('p');
    audioLengthText.classList.add('text-lg', 'mb-4');
    audioLengthText.textContent = "Het is 10 seconden audio, je kunt er altijd naar luisteren";

    const pointsText = document.createElement('p');
    pointsText.classList.add('text-lg', 'mb-4');
    pointsText.textContent = "Voor elk goed antwoord krijg je 1 punt";

    const noPointsText = document.createElement('p');
    noPointsText.classList.add('text-lg');
    noPointsText.textContent = "Voor elk fout antwoord krijg je geen punten";

    rulesContainer.appendChild(rulesText);
    rulesContainer.appendChild(audioText);
    rulesContainer.appendChild(audioLengthText);
    rulesContainer.appendChild(pointsText);
    rulesContainer.appendChild(noPointsText);

    overlay.appendChild(rulesContainer);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  }