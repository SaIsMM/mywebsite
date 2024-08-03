function togglePDF() {
    var pdfFrame = document.getElementById('pdfFrame');
    if (pdfFrame.classList.contains('hidden')) {
        pdfFrame.classList.remove('hidden');
    } else {
        pdfFrame.classList.add('hidden');
    }
}
