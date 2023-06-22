export default {
    scrollBehavior(to, _) {
      const { hash, name } = to;
      
      nextTick(() => {
        if (hash) {
            const element = document.getElementById(hash.replace(/#/, ""));
            if (element) {          
                const yOffset = -parseInt(getComputedStyle(document.body)?.getPropertyValue("--min-height-header")) ?? 80; 
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;         
                window.scrollTo({
                    top: y,
                    behavior: "smooth"
                })
            }

        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: name === 'index' ? 'smooth' :'auto',
            });
        }
        return {};
      })
      
    },
  }