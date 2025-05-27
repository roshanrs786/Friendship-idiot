export const createConfetti = () => {
  const colors = ['#ff6b8b', '#ff8e9e', '#ffb3c1', '#ffd8e1', '#f8bbd0', '#f48fb1', '#f06292'];
  const container = document.getElementById('confetti-container');
  
  if (!container) return;
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
};