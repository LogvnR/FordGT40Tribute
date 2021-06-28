// ===== Ferrari =====
function ferrariOn() {
  document.getElementById('ferrari-id-overlay').style.opacity = '1';
  document.getElementById('ferrari-id-overlay').style.display = 'block';
  document.getElementById('ferrari-btn-colorer').style.color = '#e70f00';
  developmentOff();
  lemansOff();
}

function ferrariOff() {
  document.getElementById('ferrari-id-overlay').style.opacity = '0';
  document.getElementById('ferrari-id-overlay').style.display = 'none';
  document.getElementById('ferrari-btn-colorer').style.color = '';
}

// ===== Development =====
function developmentOn() {
  document.getElementById('development-id-overlay').style.display = 'block';
  document.getElementById('development-btn-colorer').style.color = '#e70f00';
  ferrariOff();
  lemansOff();
}

function developmentOff() {
  document.getElementById('development-id-overlay').style.display = 'none';
  document.getElementById('development-btn-colorer').style.color = '';
}
// ===== Le Mans =====
function lemansOn() {
  document.getElementById('lemans-id-overlay').style.display = 'block';
  document.getElementById('lemans-btn-colorer').style.color = '#e70f00';
  developmentOff();
  ferrariOff();
}

function lemansOff() {
  document.getElementById('lemans-id-overlay').style.display = 'none';
  document.getElementById('lemans-btn-colorer').style.color = '';
}
