import a_new_hope from "../assets/a_new_hope.jpg";
import attack_of_the_clones from "../assets/attack_of_the_clones.jpg";
import empire_strikes_back from "../assets/empire_strikes_back.jpg";
import return_of_the_jedi from "../assets/return_of_the_jedi.jpg";
import revenge_of_the_sith from "../assets/revenge_of_the_sith.jpg";
import the_phantom_menance from "../assets/the_phantom_menance.jpg";
import star_wars from "../assets/star_wars.jpg";

export const getImageFromEpisodeID = (episodeID) => {
    switch (episodeID) {
        case 1: return the_phantom_menance;
        case 2: return attack_of_the_clones;
        case 3: return revenge_of_the_sith;
        case 4: return a_new_hope;
        case 5: return empire_strikes_back;
        case 6: return return_of_the_jedi;
        default: return star_wars;
    }
};