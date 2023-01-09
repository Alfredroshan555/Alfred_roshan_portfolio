export const scrollIntoSection = (section) =>{
    document.querySelector("#" + section).scrollIntoView({behavior: "smooth"})
}