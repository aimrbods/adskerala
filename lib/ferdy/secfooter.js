export function secfooter(page){

  return `
<div bis_skin_checked='1' data-view='toggleItemDescription'>
<div bis_skin_checked='1' class='js-item-togglable-content has-toggle'>
<div bis_skin_checked='1' class='js-item-description-toggle item-description-toggle'>
<a class='item-description-toggle__link' href='${page.canonical}'>
<span>Show More <i class='e-icon -icon-chevron-down'></i></span>
<span class='item-description-toggle__less'>Show Less <i class='e-icon -icon-chevron-down -rotate-180'></i></span>
</a>
</div>
</div>
</div>
`;
}
