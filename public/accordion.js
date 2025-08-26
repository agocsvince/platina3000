(function() {
    function initAccordion() {
        function handleClick(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const accordion = this;
            const panel = accordion.nextElementSibling;
            if (!panel || !panel.classList.contains('panel')) return;
            
            const wrapper = accordion.parentElement;
            const isExpanding = !accordion.classList.contains('active');
            
            // Set states
            accordion.classList.toggle('active');
            if (wrapper) {
                wrapper.classList.toggle('active');
            }

            // Always ensure panel is visible for height calculation
            panel.style.display = 'block';
            
            if (isExpanding) {
                const height = panel.scrollHeight;
                requestAnimationFrame(() => {
                    panel.style.maxHeight = height + "px";
                    
                    // Update parent panels if nested
                    let parent = wrapper ? wrapper.parentElement : null;
                    while (parent) {
                        if (parent.classList.contains('panel')) {
                            const parentCurrentHeight = parseInt(parent.style.maxHeight) || 0;
                            parent.style.maxHeight = (parentCurrentHeight + height) + "px";
                        }
                        parent = parent.parentElement;
                    }
                });
            } else {
                const height = panel.scrollHeight;
                requestAnimationFrame(() => {
                    panel.style.maxHeight = "0px";
                    
                    // Update parent panels if nested
                    let parent = wrapper ? wrapper.parentElement : null;
                    while (parent) {
                        if (parent.classList.contains('panel')) {
                            const parentCurrentHeight = parseInt(parent.style.maxHeight) || 0;
                            parent.style.maxHeight = (parentCurrentHeight - height) + "px";
                        }
                        parent = parent.parentElement;
                    }
                });

                // Hide panel after transition
                const hidePanel = () => {
                    if (!accordion.classList.contains('active')) {
                        panel.style.display = 'none';
                    }
                    panel.removeEventListener('transitionend', hidePanel);
                };
                panel.addEventListener('transitionend', hidePanel);
            }
        }

        // First remove any existing listeners
        const accordions = document.getElementsByClassName("accordion");
        Array.from(accordions).forEach(accordion => {
            // Clone the accordion to remove all event listeners
            const newAccordion = accordion.cloneNode(true);
            accordion.parentNode.replaceChild(newAccordion, accordion);
            
            // Add our single click handler
            newAccordion.addEventListener("click", handleClick);
        });

        // Initialize panels
        const panels = document.getElementsByClassName("panel");
        Array.from(panels).forEach(panel => {
            if (!panel.previousElementSibling?.classList.contains('active')) {
                panel.style.display = 'none';
                panel.style.maxHeight = "0px";
            }
        });
    }

    // Expose to window
    window.initAccordion = initAccordion;

    // Initialize once when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAccordion, { once: true });
    } else {
        initAccordion();
    }
})();
