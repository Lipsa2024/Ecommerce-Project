import "./bootstrap";
import "preline";

document.addEventListener("livewire:navigated", () => {
    window.HSStaticMethos.autoInit();
});
