((doc) => {
  doc.querySelectorAll('.event-info').forEach(info => {
    info.onclick = (e) => {
      e.preventDefault();
      info.parentNode.classList.add('open');
    };
  });

  doc.querySelectorAll('.event-detail').forEach(detail => {
    detail.onclick = (e) => {
      e.preventDefault();
      detail.parentNode.classList.remove('open');
    };
  });
})(document);