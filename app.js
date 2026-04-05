/* =============================================
   FORZA SPORT — Global State & Logic
   ============================================= */

// ── Products catalog (20 items) ──────────────
const PRODUCTS = [
  // NUTRITION
  {
    id: 1,
    cat: "nutrition",
    name: "Whey Protéine Vanille 2kg",
    brand: "Vibe Nutrition",
    price: 44.9,
    old: 54.9,
    emoji: "🥛",
    badge: "hot",
    desc: "Whey concentrate premium, 24g protéines/dose",
    stars: 5,
  },
  {
    id: 2,
    cat: "nutrition",
    name: "BCAA Recovery 300g",
    brand: "Vibe Nutrition",
    price: 24.9,
    old: null,
    emoji: "💊",
    badge: "new",
    desc: "Ratio 2:1:1 optimal, récupération musculaire",
    stars: 5,
  },
  {
    id: 3,
    cat: "nutrition",
    name: "Créatine Monohydrate 500g",
    brand: "Vibe Nutrition",
    price: 19.9,
    old: null,
    emoji: "⚡",
    badge: null,
    desc: "Pureté 99.9%, force & endurance",
    stars: 4,
  },
  {
    id: 4,
    cat: "nutrition",
    name: "Mass Gainer Chocolat 5kg",
    brand: "Vibe Nutrition",
    price: 64.9,
    old: 79.9,
    emoji: "🍫",
    badge: "sale",
    desc: "Prise de masse optimisée, 500kcal/dose",
    stars: 4,
  },
  {
    id: 5,
    cat: "nutrition",
    name: "Pre-Workout XPLOSION",
    brand: "Vibe Nutrition",
    price: 34.9,
    old: null,
    emoji: "🔥",
    badge: "hot",
    desc: "Caféine + béta-alanine + citrulline, énergie max",
    stars: 5,
  },
  {
    id: 6,
    cat: "nutrition",
    name: "Oméga-3 Fish Oil 180 caps",
    brand: "Vibe Nutrition",
    price: 18.9,
    old: null,
    emoji: "🐟",
    badge: "bio",
    desc: "EPA 360mg + DHA 240mg, qualité pharmaceutique",
    stars: 4,
  },
  {
    id: 7,
    cat: "nutrition",
    name: "Multivitamines Sport 90 tabs",
    brand: "Vibe Nutrition",
    price: 22.9,
    old: 28.0,
    emoji: "💛",
    badge: "sale",
    desc: "Complexe 25 vitamines & minéraux",
    stars: 4,
  },
  // ÉQUIPEMENT
  {
    id: 8,
    cat: "equipement",
    name: "Haltères Néoprène 2x10kg",
    brand: "VibeGear",
    price: 54.9,
    old: null,
    emoji: "🏋️",
    badge: null,
    desc: "Prise en main antidérapante, revêtement néoprène",
    stars: 5,
  },
  {
    id: 9,
    cat: "equipement",
    name: "Bande de résistance Set x5",
    brand: "VibeGear",
    price: 29.9,
    old: 39.9,
    emoji: "🎽",
    badge: "sale",
    desc: "5 niveaux de résistance, latex premium",
    stars: 4,
  },
  {
    id: 10,
    cat: "equipement",
    name: "Tapis de Sol Sport 10mm",
    brand: "ForzaGear",
    price: 39.9,
    old: null,
    emoji: "🧘",
    badge: "new",
    desc: "Mousse haute densité, antidérapant",
    stars: 5,
  },
  {
    id: 11,
    cat: "equipement",
    name: "Corde à Sauter Speed Rope",
    brand: "VibeGear",
    price: 24.9,
    old: null,
    emoji: "🪢",
    badge: null,
    desc: "Câble acier gainé, réglable, roulements à billes",
    stars: 4,
  },
  {
    id: 12,
    cat: "equipement",
    name: "Gants de Musculation Pro",
    brand: "VibeGear",
    price: 19.9,
    old: 26.0,
    emoji: "🥊",
    badge: "sale",
    desc: "Cuir synthétique + mesh respirant",
    stars: 4,
  },
  // VÊTEMENTS
  {
    id: 13,
    cat: "vetements",
    name: "Legging Compression Femme",
    brand: "VibeWear",
    price: 44.9,
    old: null,
    emoji: "👖",
    badge: "new",
    desc: "Tissu 4 voies, maintien optimal, séchage rapide",
    stars: 5,
  },
  {
    id: 14,
    cat: "vetements",
    name: "T-shirt Dry-Fit Homme",
    brand: "VibeWear",
    price: 29.9,
    old: 37.0,
    emoji: "👕",
    badge: "sale",
    desc: "Polyester micro-perforé, évacuation humidité",
    stars: 4,
  },
  {
    id: 15,
    cat: "vetements",
    name: "Veste Running Softshell",
    brand: "VibeWear",
    price: 79.9,
    old: null,
    emoji: "🧥",
    badge: null,
    desc: "Coupe-vent, légère, poche zippée",
    stars: 5,
  },
  // CHAUSSURES
  {
    id: 16,
    cat: "chaussures",
    name: "Running Boost X Pro",
    brand: "VibeRun",
    price: 119.9,
    old: 149.9,
    emoji: "👟",
    badge: "sale",
    desc: "Semelle réactive, amorti maximal, respirant",
    stars: 5,
  },
  {
    id: 17,
    cat: "chaussures",
    name: "Cross-Training Xtreme",
    brand: "VibeRun",
    price: 89.9,
    old: null,
    emoji: "🥿",
    badge: "new",
    desc: "Polyvalent, stabilité latérale renforcée",
    stars: 4,
  },
  // ACCESSOIRES
  {
    id: 18,
    cat: "accessoires",
    name: "Bouteille Inox 750ml",
    brand: "VibeGear",
    price: 27.9,
    old: null,
    emoji: "🥤",
    badge: null,
    desc: "Double paroi, isotherme 24h, sans BPA",
    stars: 5,
  },
  {
    id: 19,
    cat: "accessoires",
    name: "Sac Sport Duffle 40L",
    brand: "VibeGear",
    price: 49.9,
    old: 62.0,
    emoji: "🎒",
    badge: "sale",
    desc: "Compartiment chaussures séparé, waterproof",
    stars: 4,
  },
  {
    id: 20,
    cat: "accessoires",
    name: "Montre GPS Heart Rate",
    brand: "VibeTech",
    price: 149.9,
    old: null,
    emoji: "⌚",
    badge: "hot",
    desc: "GPS intégré, cardio optique, 7 jours d'autonomie",
    stars: 5,
  },
];

// ── State ─────────────────────────────────────
const STORE = {
  cart: JSON.parse(localStorage.getItem("fz_cart") || "[]"),
  points: parseInt(localStorage.getItem("fz_points") || "0"),
  totalSpent: parseFloat(localStorage.getItem("fz_spent") || "0"),

  save() {
    localStorage.setItem("fz_cart", JSON.stringify(this.cart));
    localStorage.setItem("fz_points", this.points);
    localStorage.setItem("fz_spent", this.totalSpent);
  },

  cartCount() {
    return this.cart.reduce((s, i) => s + i.qty, 0);
  },

  cartTotal() {
    return this.cart.reduce((s, i) => s + i.price * i.qty, 0);
  },

  addToCart(productId, qty = 1) {
    const p = PRODUCTS.find((x) => x.id === productId);
    if (!p) return;
    const existing = this.cart.find((x) => x.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({
        id: p.id,
        name: p.name,
        price: p.price,
        emoji: p.emoji,
        qty,
      });
    }
    this.save();
    updateCartBadge();
    showToast(`${p.emoji} ${p.name}`, "Ajouté au panier !", "orange");
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter((x) => x.id !== productId);
    this.save();
    updateCartBadge();
    renderCartItems();
  },

  changeQty(productId, delta) {
    const item = this.cart.find((x) => x.id === productId);
    if (!item) return;
    item.qty = Math.max(0, item.qty + delta);
    if (item.qty === 0) this.removeFromCart(productId);
    this.save();
    renderCartItems();
  },

  checkout() {
    const total = this.cartTotal();
    const earned = Math.floor(total);
    this.points += earned;
    this.totalSpent += total;
    this.cart = [];
    this.save();
    updateCartBadge();
    renderCartItems();
    closeCart();
    showOrderSuccess(total, earned);
  },

  subscribeGym() {
    const earned = Math.floor(34.99);
    this.points += earned;
    this.totalSpent += 34.99;
    this.save();
    updatePointsDisplay();
    showToast(
      "🏋️ Abonnement salle",
      "Commandé avec succès ! +34 pts fidélité",
      "blue",
    );
  },
};

// ── Toast ─────────────────────────────────────
function showToast(title, sub, type = "orange") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const icons = { orange: "🛒", blue: "⭐", success: "✅" };
  const t = document.createElement("div");
  t.className = `toast ${type === "blue" ? "blue" : type === "success" ? "success" : ""}`;
  t.innerHTML = `
    <span class="toast-icon">${icons[type] || "🛒"}</span>
    <div><div class="toast-msg">${title}</div><div class="toast-sub">${sub}</div></div>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.animation = "slideOut .3s ease forwards";
    setTimeout(() => t.remove(), 300);
  }, 3500);
}

// ── Order success modal ───────────────────────
function showOrderSuccess(total, points) {
  const m = document.getElementById("order-modal");
  if (!m) return;
  document.getElementById("om-total").textContent = total.toFixed(2) + " €";
  document.getElementById("om-points").textContent = points + " pts";
  document.getElementById("om-total-pts").textContent = STORE.points + " pts";
  m.classList.add("open");
  updatePointsDisplay();
}
function closeOrderModal() {
  const m = document.getElementById("order-modal");
  if (m) m.classList.remove("open");
}

// ── Cart sidebar ──────────────────────────────
function openCart() {
  document.getElementById("cart-sidebar")?.classList.add("open");
  document.getElementById("cart-overlay")?.classList.add("open");
  renderCartItems();
}
function closeCart() {
  document.getElementById("cart-sidebar")?.classList.remove("open");
  document.getElementById("cart-overlay")?.classList.remove("open");
}

function renderCartItems() {
  const el = document.getElementById("cart-items");
  if (!el) return;
  const total = STORE.cartTotal();
  const earned = Math.floor(total);

  if (STORE.cart.length === 0) {
    el.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div>Votre panier est vide</div></div>`;
  } else {
    el.innerHTML = STORE.cart
      .map(
        (item) => `
      <div class="cart-item">
        <div class="cart-item-img">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} €</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="STORE.changeQty(${item.id},-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="STORE.changeQty(${item.id},1)">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="STORE.removeFromCart(${item.id})">✕</button>
      </div>`,
      )
      .join("");
  }

  // totals
  const sub = document.getElementById("cart-subtotal");
  const grand = document.getElementById("cart-grand");
  const pts = document.getElementById("cart-earn-pts");
  if (sub) sub.textContent = total.toFixed(2) + " €";
  if (grand) grand.textContent = total.toFixed(2) + " €";
  if (pts)
    pts.textContent = `+${earned} pts fidélité à gagner sur cette commande`;
}

function updateCartBadge() {
  const count = STORE.cartCount();
  document.querySelectorAll(".cart-badge-val").forEach((el) => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function updatePointsDisplay() {
  document.querySelectorAll(".points-display").forEach((el) => {
    el.textContent = STORE.points + " pts";
  });
  // loyalty bar if exists
  updateLoyaltyBar();
}

function updateLoyaltyBar() {
  const tiers = [
    {
      name: "Bronze",
      min: 0,
      max: 200,
      reward: "Réduction 5%",
      color: "#cd7f32",
    },
    {
      name: "Silver",
      min: 200,
      max: 500,
      reward: "Réduction 10% + cadeau",
      color: "#a8b2c0",
    },
    {
      name: "Gold",
      min: 500,
      max: 1000,
      reward: "Réduction 15% + livraison offerte",
      color: "#ffd700",
    },
    {
      name: "Platinum",
      min: 1000,
      max: 2000,
      reward: "Réduction 20% + accès VIP",
      color: "#e5e4e2",
    },
  ];
  const pts = STORE.points;
  const bar = document.getElementById("loyalty-bar-fill");
  const barLabel = document.getElementById("loyalty-bar-label");
  const tierLabel = document.getElementById("loyalty-tier-name");
  const tierReward = document.getElementById("loyalty-tier-reward");
  const tierNext = document.getElementById("loyalty-tier-next");
  if (!bar) return;

  let current = tiers[tiers.length - 1];
  let next = null;
  for (let i = 0; i < tiers.length; i++) {
    if (pts >= tiers[i].min && pts < tiers[i].max) {
      current = tiers[i];
      next = tiers[i + 1] || null;
      break;
    }
  }
  const pct = next
    ? Math.min(100, ((pts - current.min) / (current.max - current.min)) * 100)
    : 100;
  bar.style.width = pct + "%";
  bar.style.background = `linear-gradient(90deg, ${current.color}, ${next ? next.color : current.color})`;
  if (barLabel) barLabel.textContent = `${pts} pts — ${pct.toFixed(0)}%`;
  if (tierLabel) {
    tierLabel.textContent = current.name;
    tierLabel.style.color = current.color;
  }
  if (tierReward) tierReward.textContent = current.reward;
  if (tierNext && next)
    tierNext.textContent = `Plus que ${next.min - pts} pts pour atteindre ${next.name} (${next.reward})`;
  else if (tierNext)
    tierNext.textContent = "🏆 Niveau maximum atteint ! Félicitations !";
}

// ── Init on DOMContentLoaded ──────────────────
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  updatePointsDisplay();
  renderCartItems();

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.dataset.group || "default";
      document
        .querySelectorAll(`.filter-btn[data-group="${group}"]`)
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      document.querySelectorAll(".product-card[data-cat]").forEach((card) => {
        card.style.display =
          cat === "all" || card.dataset.cat === cat ? "" : "none";
      });
    });
  });
});
