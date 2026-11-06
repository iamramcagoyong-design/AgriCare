// VIEW: the bar at the bottom showing how many diseases are selected
export class CompareBarView {
  constructor() {
    this.bar = document.querySelector('#compare-bar');
    this.count = document.querySelector('#compare-count');
    this.compareBtn = document.querySelector('#compare-btn');
    this.clearBtn = document.querySelector('#compare-clear');
  }

  bind({ onCompare, onClear }) {
    this.compareBtn.addEventListener('click', onCompare);
    this.clearBtn.addEventListener('click', onClear);
  }

  render(selectedCount, max) {
    this.bar.hidden = selectedCount === 0;
    this.count.textContent = `${selectedCount} selected (pick 2-${max})`;
    this.compareBtn.disabled = selectedCount < 2;
  }

  warnLimit(max) {
    alert(`You can compare up to ${max} diseases at a time.`);
  }
}
