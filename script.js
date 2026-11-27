const monthlyPhoto = document.querySelector('#monthly-photo');

if (monthlyPhoto) {
  const fallbackImage = 'Hana.JPEG';
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const candidates = [`Gazou/${month}.jpg`, `Gazou/${month}.JPEG`];

  const tryCandidate = (index) => {
    if (index >= candidates.length) {
      monthlyPhoto.src = fallbackImage;
      return;
    }

    const image = new Image();
    image.onload = () => {
      monthlyPhoto.src = candidates[index];
    };
    image.onerror = () => {
      tryCandidate(index + 1);
    };
    image.src = candidates[index];
  };

  tryCandidate(0);
}
