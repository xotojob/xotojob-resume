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

/** 
 * PAGE-BREAK
 */

Vue.component('page-break', {
  template: '<div class=\'page-break\'></div>'
});

/** 
 * PAGE
 */

Vue.component('page', {
  template: '<div class=\'page\'><slot></slot></div>'
});

/** 
 * CV-CONTENT
 */

Vue.component('cv-content', {
  props: {
    'space-around': Boolean
  },
  template: '<div :class=\'{grid:true, around:spaceAround}\'><slot></slot></div>'
});

/** 
 * SIMPLE-SECTION
 */

Vue.component('simple-section', {
  props: [ 'name' ],
  template: '<div class="section"><h3 class="header float-in-up">{{name}}</h3><slot></slot></div>'
});

/** 
 * COLUMN
 */

Vue.component('column', {
  props: [ 'width' ],
  template: '<div class="column" :style=\'{ flexBasis: width + "%"}\'><slot></slot></div>'
});

/** 
 * DROP-TARGET
 */

Vue.component('drop-target', {
  props: [ 'visible' ],
  template: '<div v-if="visible" class="drop-target">Full Stack Web Developer</div>'
});

/** 
 * PAGE-FOOTER
 */

Vue.component('page-footer', {
  template: '"<div class="page-footer grid"><slot></slot></div>"'
});

/** 
 * EXPERIENCES
 */

Vue.component('experiences', {
  props: [ 'data' ],
  template: `
        <div class='section'>
            <h3 class="header float-in-up">Experience<span class="hide"> In <div id="typewriter" style="opacity: 1;"><span class="cursor-c"> |</span></div></span></h3>
            <div v-for='job in data' class='job sub-section'>
                <h5 class="header">{{job.title}}</h5><span class="sub-section"><span >@</span>{{job.company}} &middot; {{job.location}} &middot; {{job.from}} - {{job.to}}</span><p style="fontStyle: italic">{{job.description}}</p>
                <ul class="results"><li v-for="r in job.results">&nbsp;&nbsp;&nbsp;&nbsp;● &nbsp;&nbsp;{{r}}</li></ul>
                <h6 class="inline-header" v-if="job.technologies">Tech Used :</h6><span v-for="tech in job.technologies" class="tech tag">{{tech}}</span>
            </div>
        </div>`
});

/** 
 * PROJECTS
 */

Vue.component('projects', {
  props: [ 'data' ],
  template: `
        <div class='section'>
            <h3 class="header float-in-up">Personal Projects</h3>
            <div v-for='project in data' class='project sub-section'>
                <h5 class="header"><a class="no-decorate" :href="project.url">{{project.title}} &middot; {{project.category}}</a></h5><p>{{project.description}}</p>
                <h6 class="header" style="margin-top: 3.7px;">Key Features</h6>
                <ul class="results"><li v-for="r in project.features"><span>&nbsp;&nbsp;&nbsp;&nbsp;● &nbsp;&nbsp;{{r}}</span></li></ul>
                <h6 class="inline-header" v-if="project.technologies">Tech Used :</h6><span v-for="tech in project.technologies" class="tech tag">{{tech}}</span>
            <hr>
            </div>
        </div>`
});

/** 
 * EDUCATIONS
 */

Vue.component('educations', {
  props: [ 'data' ],
  template: `
        <div class='section'>
            <h3 class="header float-in-up">Education</h3>
                <div v-for='degree in data' class='sub-section'>
                <h5 class="header">{{degree.type}} · {{degree.subject}}</h5>
                <span class="sub-section"><span >@</span>{{degree.school}} &middot; {{degree.location}} &middot; {{degree.date}}</span>
                <p style="fontStyle: italic">{{degree.summary}}</p>
                <ul class="results-grid">
                    <li v-for="r in degree.modules" >
                     <i class="fas fa-arrow-right" style="fontSize: 7px; opacity: .8;">&nbsp;&nbsp;</i>&nbsp;&nbsp;{{r}}
                    </li>
                </ul>
                </div>
            </div>
        </div>`
});

/** 
 * SKILLS
 */

        // <h3 class="header float-in-up">{{header}} <span v-if="skillsHaveExperience" class="proficiency-header ">Experience</span></h3>


Vue.component('skills', {
  props: [ 'data', 'header' ],
  template: `
    <div class='skill section'>
	
        <h3 class="header float-in-up">{{header}} <span class="proficiency-header ">Experience</span></h3>
    <div v-for="skills in data" :key="skills">
	
	
	
        <h5 class="header">{{skills.title}} 
            <span v-if="skills.level" class="proficiency-level animated-underline"><span class="proficiency-bar" :style="{width:(skills.level*20)+'%'}"></span></span>
        </h5>
        <span><p>{{skills.description}}</p></span>
    </div> 
    </div>`,
	
  computed: {
    skillsHaveExperience: function () {
      if (this.data) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].value) {
            return true;
          }
        }
      }
      return false;
    }
  }
});

/** 
 * CIRCLE-CALLOUT
 */

Vue.component('circle-callout', {
  props: {
    size: Number,
    info: Boolean,
    open: Boolean
  },
  template: `
    <div @click="toggleOpen()" :class="{circle:true, open:open, openable:!!info}" :style="{ height:size + 'px', width:(size) + 'px', fontSize: (size/20) + 'em'}">
    <div><slot></slot></div><div class="circle-application-info">{{info.appVersion}}</div>
    </div>`,
  methods: {
    toggleOpen: function () {
      if (!this.info) {
        return;
      }
      this.open = !this.open;
    }
  }
});

/** 
 * CIRCLE-MENU
 */

Vue.component('circle-menu', {
  props: {
    size: Number,
    info: Object
  },
  template: `
        <div @click="toggleOpen()" :class="{circle:true, open:open, openable:true}" :style="{height:size + 'px', width:size + 'px', fontSize: (size/25) + 'em' }"> 
            <div class="initial" style="margin-top: 1px;" v-if="!open"><slot></slot></div>
              <div v-if="open" title="Close" class="icon-wrap">
                <img class="yeti"  autoplay loop muted playsinline src='./img/yeti-hello.gif'>
              </div>
            <div class="circle-application-info" @click.stop=""><div><h5>Application Version</h5> <h2>V {{info.appVersion}}</h2></div><div><h5>CV Version</h5> <h2>V {{info.version}}</h2></div>
            </div>
        </div>`,
  data: function () {
    return {
      open: false,
      clicks: 0,
      decrementInterval: null
    };
  },
  methods: {
    toggleOpen: function () {
      if (!this.info) {
        return;
      }
      if (this.open) {
        this.open = false;
      } else {
        this.clicks++;
        if (this.clicks >= 1) {
          this.open = true;
        } else {
          if (this.decrementInterval) {
            clearInterval(this.decrementInterval);
          }
          this.decrementInterval = setTimeout(() => {
            this.clicks = 0;
          }, 1000);
        }
      }
    }
  }
});
