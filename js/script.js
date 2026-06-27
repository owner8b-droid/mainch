// =====================================================
// STRUCTURA — shared site script
// =====================================================

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close menu after clicking a link (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // Highlight the current page in the nav
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current) a.classList.add('active');
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Contact form handling (Phase 1: client-side only, no backend yet)
// See the note in contact.html for how to wire this up to a real email service.
function handleContactSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  const form = event.target;

  const required = ['name', 'email', 'message'];
  for (const field of required) {
    const val = form.elements[field]?.value.trim();
    if (!val) {
      status.textContent = 'Please fill in all required fields before sending.';
      status.className = 'error';
      return;
    }
  }

  // Placeholder behavior until a real form backend is connected.
  status.textContent = 'Thanks — your message is ready to send. (Connect a form service to make this live — see comments in contact.html.)';
  status.className = 'success';
  form.reset();
}