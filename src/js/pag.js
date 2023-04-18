import { Pagination } from "tui-pagination";
const container = document.getElementById('tui-pagination-container');

const options = {
    totalItems: 10,
    itemsPerPage: 10,
    visiblePages: 10,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };

const instance = new Pagination(container, { options });

instance.getCurrentPage();

pagination.on('beforeMove', evt => {
    const { page } = evt;
    const result = ajax.call({page});
  
    if(result) {
      pagination.movePageTo(page);
    } else {
      return false;
    }
  });
  
  pagination.on('afterMove', ({ page }) => console.log(page));