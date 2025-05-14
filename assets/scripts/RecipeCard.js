// RecipeCard.js
class RecipeCard extends HTMLElement {
	constructor() {
	  super();
  
	  // A1. Attach shadow DOM
	  this.shadow = this.attachShadow({ mode: 'open' });
  
	  // A2. Create <article> element
	  const article = document.createElement('article');
  
	  // A3. Create <style> element
	  const style = document.createElement('style');
  
	  // A4. Add styles from cardTemplate.html (copy/paste ONLY what's inside <style> tag)
	  style.textContent = `
		* {
		  font-family: sans-serif;
		  margin: 0;
		  padding: 0;
		}
		article {
		  border: 1px solid rgb(223, 225, 229);
		  border-radius: 8px;
		  overflow: hidden;
		  width: 178px;
		  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		  margin: 10px;
		}
		article img {
		  width: 100%;
		  object-fit: cover;
		  height: 118px;
		}
		p.title {
		  font-size: 16px;
		  margin: 10px 0;
		}
		p.title a {
		  text-decoration: none;
		  color: #333;
		}
		p.organization {
		  color: #555;
		  font-size: 14px;
		  margin: 5px 0;
		}
		div.rating {
		  display: flex;
		  align-items: center;
		  font-size: 14px;
		}
		div.rating img {
		  width: 80px;
		  height: auto;
		  margin-right: 5px;
		}
		time {
		  display: block;
		  font-size: 12px;
		  color: #666;
		  margin: 5px 0;
		}
		p.ingredients {
		  font-size: 12px;
		  color: #666;
		  margin: 5px 0;
		}
	  `;
  
	  // A5. Append <style> and <article> to shadow DOM
	  this.shadow.appendChild(style);
	  this.shadow.appendChild(article);
	}
  
	set data(data) {
	  if (!data) return;
  
	  // A6. Select <article> in shadow DOM
	  const article = this.shadow.querySelector('article');
  
	  // A7. Set innerHTML using template literals
	  article.innerHTML = `
		<img src="${data.imgSrc}" alt="${data.imgAlt}">
		<p class="title"><a href="${data.titleLnk}">${data.titleTxt}</a></p>
		<p class="organization">${data.organization}</p>
		<div class="rating">
		  <img src="./assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
		  <span>(${data.numRatings})</span>
		</div>
		<time>${data.lengthTime}</time>
		<p class="ingredients">${data.ingredients}</p>
	  `;
	}
  }
  
  // A8. Define custom element
  customElements.define('recipe-card', RecipeCard);