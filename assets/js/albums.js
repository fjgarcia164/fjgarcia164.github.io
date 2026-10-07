function toggleDetails(panelId) {
    const allPanels = document.querySelectorAll('.album-expanded-panel');
    allPanels.forEach(panel => {
        if (panel.id !== panelId) {
            panel.style.display = 'none';
        }
    });

    const targetPanel = document.getElementById(panelId);
    if (targetPanel.style.display === 'block') {
        targetPanel.style.display = 'none';
    } else {
        targetPanel.style.display = 'block';
    }
}