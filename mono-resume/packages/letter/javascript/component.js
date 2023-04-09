/*
 :'######:::'#######::'##::::'##:'########:::'#######::'##::: ##:'########:'##::: ##:'########::'######:::::
 '##... ##:'##.... ##: ###::'###: ##.... ##:'##.... ##: ###:: ##: ##.....:: ###:: ##:... ##..::'##... ##::::
  ##:::..:: ##:::: ##: ####'####: ##:::: ##: ##:::: ##: ####: ##: ##::::::: ####: ##:::: ##:::: ##:::..:::::
  ##::::::: ##:::: ##: ## ### ##: ########:: ##:::: ##: ## ## ##: ######::: ## ## ##:::: ##::::. ######:::::
  ##::::::: ##:::: ##: ##. #: ##: ##.....::: ##:::: ##: ##. ####: ##...:::: ##. ####:::: ##:::::..... ##::::
  ##::: ##: ##:::: ##: ##:.:: ##: ##:::::::: ##:::: ##: ##:. ###: ##::::::: ##:. ###:::: ##::::'##::: ##::::
 . ######::. #######:: ##:::: ##: ##::::::::. #######:: ##::. ##: ########: ##::. ##:::: ##::::. ######:::::
 :......::::.......:::..:::::..::..::::::::::.......:::..::::..::........::..::::..:::::..::::::......::::::
*/


/* PAGE-BREAK */

Vue.component("page-break", {
  template: `
  <div class='page-break'></div>
  `
});

/* PAGE */

Vue.component("page", {
  template: `
<div class='page'>
	<slot></slot>
</div>
`
});

/* CV-CONTENT */

Vue.component("cv-content", {
  props: {
    "space-around": Boolean
  },
  template: `
  <div :class='{grid:true, around:spaceAround}'>
 	 <slot></slot>
  </div>
  `
});

/* SIMPLE-SECTION */

Vue.component("simple-section", {
  props: ['name'],
  template: `
  <div class='section'>
  <h3 class="header">{{name}}</h3>
  	<slot></slot>
  </div>
  `
});

/* COLUMN */

Vue.component("column", {
  props: ['width'],
  template: `
  <div class='column' :style='{ flexBasis: width + "%"}'>
  	<slot></slot>
  </div>
  `
});

// /* DROP-TARGET */

// Vue.component("drop-target", {
//   props: ["visible"],
//   template: `
//   <div v-if="visible" id="drop-target">Full Stack Web Developer</div>`,
// });

/* PAGE-FOOTER */

Vue.component("page-footer", {
  template: `
  <div class='page-footer grid'>
  	<slot></slot>
  </div>
  `
});
