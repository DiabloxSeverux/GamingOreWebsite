const downloadUrl = window.GAMINGORE_DOWNLOAD_URL || '#download';
const notesUrl = window.GAMINGORE_RELEASE_NOTES_URL || '#download';
const version = window.GAMINGORE_LATEST_VERSION || '1.0.0';

document.querySelectorAll('[data-download]').forEach((link) => {
  link.href = downloadUrl;
  link.target = downloadUrl.startsWith('http') ? '_blank' : '';
});

document.querySelectorAll('[data-release-notes]').forEach((link) => {
  link.href = notesUrl;
  link.target = notesUrl.startsWith('http') ? '_blank' : '';
});

document.getElementById('versionText').textContent = `Latest release: v${version}`;
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
