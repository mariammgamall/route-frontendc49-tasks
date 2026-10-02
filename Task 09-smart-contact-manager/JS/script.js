// Global variables
let contacts = [];
let currentIndex = -1; // -1 for Add, >= 0 for Edit index
let currentAvatar = '';

// Validation Regex Patterns
const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const phoneRegex = /^01[0125][0-9]{8}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// DOM Elements
const addContactBtn = document.getElementById('addContactBtn');
const contactModalElement = document.getElementById('contactModal');
const contactForm = document.getElementById('contactForm');
const modalTitle = document.getElementById('modalTitle');

const contactName = document.getElementById('contactName');
const contactPhone = document.getElementById('contactPhone');
const contactEmail = document.getElementById('contactEmail');
const contactAddress = document.getElementById('contactAddress');
const contactGroup = document.getElementById('contactGroup');
const contactNotes = document.getElementById('contactNotes');
const contactFavorite = document.getElementById('contactFavorite');
const contactEmergency = document.getElementById('contactEmergency');

const nameGroup = document.getElementById('nameGroup');
const phoneGroup = document.getElementById('phoneGroup');
const emailGroup = document.getElementById('emailGroup');

const avatarPreview = document.getElementById('avatarPreview');
const avatarInput = document.getElementById('avatarInput');

const searchInput = document.getElementById('searchInput');
const contactsGrid = document.getElementById('contactsGrid');
const emptyState = document.getElementById('emptyState');
const emptyStateSubtext = document.getElementById('emptyStateSubtext');
const contactsSubhead = document.getElementById('contactsSubhead');

const totalCount = document.getElementById('totalCount');
const favoritesCount = document.getElementById('favoritesCount');
const emergencyCount = document.getElementById('emergencyCount');

const favoritesList = document.getElementById('favoritesList');
const emergencyList = document.getElementById('emergencyList');

// Bootstrap Modal Instance
let bsModal = new bootstrap.Modal(contactModalElement);

// Load contacts from LocalStorage when page loads
function loadContactsFromLocalStorage() {
  const savedData = localStorage.getItem('contacts');
  if (savedData) {
    contacts = JSON.parse(savedData);
  } else {
    contacts = [];
  }
}

// Save contacts to LocalStorage
function saveContactsToLocalStorage() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Get initials from a name
function getInitials(name) {
  if (!name) return 'CH';
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

// Get background color gradient based on index
function getAvatarColor(index) {
  const colors = [
    'linear-gradient(135deg, #3b82f6, #6366f1)',
    'linear-gradient(135deg, #8b5cf6, #ec4899)',
    'linear-gradient(135deg, #10b981, #059669)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #06b6d4, #3b82f6)'
  ];
  return colors[index % colors.length];
}

// Update avatar preview inside modal
function updateAvatarPreview() {
  if (currentAvatar) {
    avatarPreview.innerHTML = '<img src="' + currentAvatar + '" class="w-100 h-100 rounded-circle object-fit-cover">';
  } else {
    const nameValue = contactName.value.trim();
    if (nameValue) {
      avatarPreview.innerHTML = getInitials(nameValue);
    } else {
      avatarPreview.innerHTML = '<i class="fa-solid fa-user"></i>';
    }
  }
}

// Handle Photo File Upload
avatarInput.addEventListener('change', function () {
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      currentAvatar = e.target.result;
      updateAvatarPreview();
    };
    reader.readAsDataURL(file);
  }
});

// Display/Render Contacts Grid & Sidebars
function displayContacts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  contactsGrid.innerHTML = '';
  favoritesList.innerHTML = '';
  emergencyList.innerHTML = '';

  let favTotal = 0;
  let emergencyTotal = 0;
  let matchTotal = 0;

  // Dynamic subheading text
  if (contactsSubhead) {
    if (contacts.length === 0) {
      contactsSubhead.textContent = 'Manage your personal and professional connections';
    } else {
      contactsSubhead.textContent = 'Manage and organize your ' + contacts.length + ' contacts';
    }
  }

  // Loop through all contacts using a standard for loop
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contact.favorite) {
      favTotal++;
    }
    if (contact.emergency) {
      emergencyTotal++;
    }

    // Check search criteria
    const nameMatch = contact.name.toLowerCase().includes(searchTerm);
    const phoneMatch = contact.phone.toLowerCase().includes(searchTerm);
    const emailMatch = contact.email.toLowerCase().includes(searchTerm);

    if (nameMatch || phoneMatch || emailMatch) {
      matchTotal++;

      // Render Contact Card
      const cardCol = document.createElement('div');
      cardCol.className = 'col-12 col-md-6';

      const initials = getInitials(contact.name);
      const bgGradient = getAvatarColor(i);

      let avatarContent = initials;
      if (contact.avatar) {
        avatarContent = `<img src="${contact.avatar}" class="w-100 h-100 rounded-circle object-fit-cover">`;
      }

      let groupBadgeHTML = '';
      if (contact.group) {
        groupBadgeHTML = `<span class="badge-group">${contact.group}</span>`;
      }

      let emergencyBadgeHTML = '';
      if (contact.emergency) {
        emergencyBadgeHTML = `<span class="badge-emergency-tag"><i class="fa-solid fa-heart-pulse"></i> Emergency</span>`;
      }

      let starBadgeHTML = '';
      if (contact.favorite) {
        starBadgeHTML = `<div class="badge-star"><i class="fa-solid fa-star"></i></div>`;
      }

      let heartBadgeHTML = '';
      if (contact.emergency) {
        heartBadgeHTML = `<div class="badge-heart"><i class="fa-solid fa-heart-pulse"></i></div>`;
      }

      const favActive = contact.favorite ? 'active' : '';
      const emergencyActive = contact.emergency ? 'active' : '';

      cardCol.innerHTML = `
        <div class="contact-card h-100">
          <div>
            <div class="d-flex align-items-start gap-3 mb-3">
              <div class="avatar-wrapper">
                <div class="contact-avatar" style="background: ${bgGradient};">
                  ${avatarContent}
                </div>
                ${starBadgeHTML}
                ${heartBadgeHTML}
              </div>
              <div class="overflow-hidden flex-grow-1">
                <h5 class="fw-bold text-dark mb-1 text-truncate">${contact.name}</h5>
                <div class="d-flex align-items-center gap-2 text-muted small mb-1">
                  <i class="fa-solid fa-phone" style="width: 14px;"></i>
                  <span class="text-truncate">${contact.phone}</span>
                </div>
                <div class="d-flex align-items-center gap-2 text-muted small mb-2">
                  <i class="fa-solid fa-envelope" style="width: 14px;"></i>
                  <span class="text-truncate">${contact.email}</span>
                </div>
                <div class="d-flex flex-wrap gap-1">
                  ${groupBadgeHTML}
                  ${emergencyBadgeHTML}
                </div>
              </div>
            </div>
          </div>

          <div class="card-actions">
            <a href="tel:${contact.phone}" class="action-btn call-btn" title="Call ${contact.name}">
              <i class="fa-solid fa-phone"></i>
            </a>
            <a href="mailto:${contact.email}" class="action-btn email-btn" title="Email ${contact.name}">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <button type="button" class="action-btn star-btn ${favActive}" onclick="toggleFavorite(${i})" title="Favorite">
              <i class="fa-solid fa-star"></i>
            </button>
            <button type="button" class="action-btn heart-btn ${emergencyActive}" onclick="toggleEmergency(${i})" title="Emergency">
              <i class="fa-solid fa-heart-pulse"></i>
            </button>
            <button type="button" class="action-btn edit-btn ms-auto" onclick="openEditModal(${i})" title="Edit Contact">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="action-btn delete-btn" onclick="deleteContact(${i})" title="Delete Contact">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;

      contactsGrid.appendChild(cardCol);
    }

    // Populate Favorites Sidebar list
    if (contact.favorite) {
      const favItem = document.createElement('div');
      favItem.className = 'widget-item';

      let miniAvatarContent = getInitials(contact.name);
      if (contact.avatar) {
        miniAvatarContent = `<img src="${contact.avatar}" class="w-100 h-100 rounded-circle object-fit-cover">`;
      }

      favItem.innerHTML = `
        <div class="d-flex align-items-center gap-2 overflow-hidden">
          <div class="mini-avatar">${miniAvatarContent}</div>
          <div class="overflow-hidden">
            <div class="fw-semibold text-dark text-truncate small">${contact.name}</div>
            <div class="text-muted text-truncate" style="font-size: 0.725rem;">${contact.phone}</div>
          </div>
        </div>
        <a href="tel:${contact.phone}" class="action-btn call-btn ms-2 flex-shrink-0" style="width: 32px; height: 32px;">
          <i class="fa-solid fa-phone" style="font-size: 0.75rem;"></i>
        </a>
      `;
      favoritesList.appendChild(favItem);
    }

    // Populate Emergency Sidebar list
    if (contact.emergency) {
      const emergencyItem = document.createElement('div');
      emergencyItem.className = 'widget-item';

      let miniAvatarContent = getInitials(contact.name);
      if (contact.avatar) {
        miniAvatarContent = `<img src="${contact.avatar}" class="w-100 h-100 rounded-circle object-fit-cover">`;
      }

      emergencyItem.innerHTML = `
        <div class="d-flex align-items-center gap-2 overflow-hidden">
          <div class="mini-avatar" style="background: linear-gradient(135deg, #f43f5e, #e11d48);">${miniAvatarContent}</div>
          <div class="overflow-hidden">
            <div class="fw-semibold text-dark text-truncate small">${contact.name}</div>
            <div class="text-muted text-truncate" style="font-size: 0.725rem;">${contact.phone}</div>
          </div>
        </div>
        <a href="tel:${contact.phone}" class="action-btn call-btn ms-2 flex-shrink-0" style="width: 32px; height: 32px;">
          <i class="fa-solid fa-phone" style="font-size: 0.75rem;"></i>
        </a>
      `;
      emergencyList.appendChild(emergencyItem);
    }
  }

  // Update Stat Counters
  totalCount.textContent = contacts.length;
  favoritesCount.textContent = favTotal;
  emergencyCount.textContent = emergencyTotal;

  // Handle Empty State Display
  if (matchTotal === 0) {
    emptyState.classList.remove('d-none');
    if (contacts.length === 0) {
      emptyStateSubtext.textContent = 'Click "Add Contact" to get started';
    } else {
      emptyStateSubtext.textContent = 'No contacts match your search query';
    }
  } else {
    emptyState.classList.add('d-none');
  }

  // Empty state for Favorites sidebar widget
  if (favTotal === 0) {
    favoritesList.innerHTML = `<div class="text-center text-muted py-3 small">No favorites yet</div>`;
  }

  // Empty state for Emergency sidebar widget
  if (emergencyTotal === 0) {
    emergencyList.innerHTML = `<div class="text-center text-muted py-3 small">No emergency contacts</div>`;
  }
}

// Clear all validation errors from modal
function resetValidationErrors() {
  nameGroup.classList.remove('has-error');
  phoneGroup.classList.remove('has-error');
  if (emailGroup) emailGroup.classList.remove('has-error');
}

// Validation Logic matching exact conditions
function validateForm() {
  resetValidationErrors();
  let isValid = true;

  const nameVal = contactName.value.trim();
  const phoneVal = contactPhone.value.trim();
  const emailVal = contactEmail.value.trim();

  // Validate Full Name: letters & spaces only, 2-50 chars
  if (!nameRegex.test(nameVal)) {
    nameGroup.classList.add('has-error');
    isValid = false;
  }

  // Validate Phone: Egyptian phone format (010, 011, 012, 015 + 8 digits)
  if (!phoneRegex.test(phoneVal)) {
    phoneGroup.classList.add('has-error');
    isValid = false;
  }

  // Validate Email: optional, but if entered must be valid
  if (emailVal.length > 0 && !emailRegex.test(emailVal)) {
    if (emailGroup) emailGroup.classList.add('has-error');
    isValid = false;
  }

  return isValid;
}

// Real-time input listeners for validation feedback
contactName.addEventListener('input', function () {
  updateAvatarPreview();
  const val = contactName.value.trim();
  if (val.length > 0 && !nameRegex.test(val)) {
    nameGroup.classList.add('has-error');
  } else {
    nameGroup.classList.remove('has-error');
  }
});

contactPhone.addEventListener('input', function () {
  const val = contactPhone.value.trim();
  if (val.length > 0 && !phoneRegex.test(val)) {
    phoneGroup.classList.add('has-error');
  } else {
    phoneGroup.classList.remove('has-error');
  }
});

contactEmail.addEventListener('input', function () {
  const val = contactEmail.value.trim();
  if (val.length > 0 && !emailRegex.test(val)) {
    if (emailGroup) emailGroup.classList.add('has-error');
  } else {
    if (emailGroup) emailGroup.classList.remove('has-error');
  }
});

// Open Modal to Add New Contact
function openAddModal() {
  currentIndex = -1;
  currentAvatar = '';
  modalTitle.textContent = 'Add New Contact';

  contactForm.reset();
  avatarInput.value = '';
  resetValidationErrors();
  updateAvatarPreview();

  bsModal.show();
}

// Open Modal to Edit Contact
function openEditModal(index) {
  currentIndex = index;
  modalTitle.textContent = 'Edit Contact';

  resetValidationErrors();

  const contact = contacts[index];
  contactName.value = contact.name;
  contactPhone.value = contact.phone;
  contactEmail.value = contact.email || '';
  contactAddress.value = contact.address || '';
  contactGroup.value = contact.group || '';
  contactNotes.value = contact.notes || '';
  contactFavorite.checked = contact.favorite;
  contactEmergency.checked = contact.emergency;

  currentAvatar = contact.avatar || '';
  avatarInput.value = '';

  updateAvatarPreview();
  bsModal.show();
}

// Save Contact (Add or Edit)
function saveContact(e) {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  const contactObj = {
    name: contactName.value.trim(),
    phone: contactPhone.value.trim(),
    email: contactEmail.value.trim(),
    address: contactAddress.value.trim(),
    group: contactGroup.value,
    notes: contactNotes.value.trim(),
    favorite: contactFavorite.checked,
    emergency: contactEmergency.checked,
    avatar: currentAvatar
  };

  if (currentIndex === -1) {
    // Add new contact
    contacts.push(contactObj);
    saveContactsToLocalStorage();
    displayContacts();
    bsModal.hide();

    Swal.fire({
      icon: 'success',
      title: 'Contact added successfully!',
      timer: 1500,
      showConfirmButton: false
    });
  } else {
    // Update existing contact
    contacts[currentIndex] = contactObj;
    saveContactsToLocalStorage();
    displayContacts();
    bsModal.hide();

    Swal.fire({
      icon: 'success',
      title: 'Contact updated successfully!',
      timer: 1500,
      showConfirmButton: false
    });
  }
}

// Delete Contact with SweetAlert2 confirmation
function deleteContact(index) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you really want to delete this contact?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e11d48',
    cancelButtonColor: '#64748b',
    confirmButtonText: 'Yes, delete it!'
  }).then(function (result) {
    if (result.isConfirmed) {
      contacts.splice(index, 1);
      saveContactsToLocalStorage();
      displayContacts();

      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Contact has been deleted.',
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
}

// Toggle Favorite status
function toggleFavorite(index) {
  contacts[index].favorite = !contacts[index].favorite;
  saveContactsToLocalStorage();
  displayContacts();
}

// Toggle Emergency status
function toggleEmergency(index) {
  contacts[index].emergency = !contacts[index].emergency;
  saveContactsToLocalStorage();
  displayContacts();
}

// Event Listeners
addContactBtn.addEventListener('click', openAddModal);
contactForm.addEventListener('submit', saveContact);

searchInput.addEventListener('input', function () {
  displayContacts();
});

// App initialization on DOM load
loadContactsFromLocalStorage();
displayContacts();
