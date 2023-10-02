class ProductCategory {
    constructor(categoryArray) {
        this.category = categoryArray[0];
        this.products = [];
        for (const productArray of categoryArray[1]) {
            this.products.push(new Product(productArray));
        }
    }

    GenerateHtml() {
        const section = document.createElement("section");
        section.className = "Boekcategorie";

        const categoryHeader = document.createElement("h4");
        categoryHeader.innerHTML = this.category;

        section.appendChild(categoryHeader);

        for (const product of this.products) {
            section.appendChild(product.GenerateHtml());
        }
        return section;
    }
}

class Product {
    constructor(productArray) {
        this.className = productArray[0];
        this.href = productArray[1];
        this.title = productArray[2];
        this.imgSrc = productArray[3];
        this.imgAlt = productArray[4];
        this.price = productArray[5];
    }

    GenerateHtml() {
        const section = document.createElement("section");
        section.className = this.className;
        let headerImageWrapper = section;
        if (this.href) {
            const a = document.createElement("a");
            a.href = this.href;
            section.appendChild(a);
            headerImageWrapper = a;
        }
        const header = document.createElement("h5");
        header.innerText = this.title;
        headerImageWrapper.appendChild(header);

        const img = document.createElement("img");
        img.src = this.imgSrc;
        img.alt = this.imgAlt;
        headerImageWrapper.appendChild(img);

        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.innerHTML = this.price;
        ul.appendChild(li);

        section.appendChild(ul);

        return section;
    }
}

window.addEventListener("load", function () {
    dynamic();
});

function reverse() {
    const parent = document.querySelector(".Boekcategorie").parentNode;
    parent.append.apply(parent, Array.from(parent.childNodes).reverse());
    for (const child of parent.children) {
        for (let i = 2; i < child.childNodes.length; i++) {
            child.insertBefore(child.childNodes[i], child.firstChild.nextSibling);
        }
    }
}

function dynamic() {
    const footer = document.querySelector("footer");
    const main = document.createElement("main");
    main.className = "productoverzichtmain";

    const filterCategorySection = document.createElement("section");
    filterCategorySection.className = "filterproduct";
    const productPage = document.createElement("a");

    productPage.href = "./ProductoverzichtPagina.html";
    productPage.innerText = "Statische productoverzicht";
    filterCategorySection.appendChild(productPage);

    const filterHeader = document.createElement("h2");
    filterHeader.innerText = "Filters";
    filterHeader.className = "titelFilter";
    filterCategorySection.appendChild(filterHeader);

    main.appendChild(filterCategorySection);

    const filterLabelSection = document.createElement("section");
    filterLabelSection.className = "filterselectie";

    const filterLabelHeader = document.createElement("h3");
    filterLabelHeader.innerText = "Filterkeuze"
    filterLabelHeader.className = "hiddenTitle";
    filterLabelSection.appendChild(filterLabelHeader);

    const categorySection = document.createElement("section");
    categorySection.className = "boekenoverzicht";
     
    const categoryHeader = document.createElement("h3");
    categoryHeader.innerText = "Boeken";
    categoryHeader.className = "hiddenTitle";
    categorySection.appendChild(categoryHeader);

    const reverseButton = document.createElement("input");
    reverseButton.type = "button";
    reverseButton.value = "Reverse";
    reverseButton.addEventListener("click", reverse);
    reverseButton.style.marginLeft = "12px";

    for (const filter of [{label: "all", text: "Alles"}, {
        label: "tientot20",
        text: "€10 tot €20"
    }, {label: "twintigtot30", text: "€20 tot €30"}, {label: "dertigtot40", text: "€30 tot €40"}]) {
        const input = document.createElement("input");
        input.className = "filterkeuze";
        input.id = filter.label;
        input.name = "price";
        input.type = "radio";
        if (filter.label === "all") {
            input.checked = true;
        }
        filterCategorySection.appendChild(input);

        const label = document.createElement("label");
        label.className = "filternaam";
        label.htmlFor = filter.label;
        label.innerText = filter.text;
        filterLabelSection.appendChild(label);
    }
    filterCategorySection.appendChild(filterLabelSection);
    filterCategorySection.appendChild(reverseButton);
    filterCategorySection.appendChild(categorySection);

    for (const category of data) {
        categorySection.appendChild(new ProductCategory(category).GenerateHtml());
    }
    footer.parentNode.insertBefore(main, footer);
}