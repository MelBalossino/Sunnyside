import Image from '../Image/Image';

import milkBottlesMobile from '../../assets/mobile/image-gallery-milkbottles.jpg';
import milkBottlesDesktop from '../../assets/desktop/image-gallery-milkbottles.jpg';
import orangeMobile from '../../assets/mobile/image-gallery-orange.jpg';
import orangeDesktop from '../../assets/desktop/image-gallery-orange.jpg';
import coneMobile from '../../assets/mobile/image-gallery-cone.jpg';
import coneDesktop from '../../assets/desktop/image-gallery-cone.jpg';
import sugarCubesMobile from '../../assets/mobile/image-gallery-sugar-cubes.jpg';
import sugarCubesDesktop from '../../assets/desktop/image-gallery-sugarcubes.jpg';

const ImagesGallery = () => {
    return (
        <div>
            <Image
                imgMobile={milkBottlesMobile}
                imgDesktop={milkBottlesDesktop}
            />
            <Image
                imgMobile={orangeMobile}
                imgDesktop={orangeDesktop}
            />
            <Image
                imgMobile={coneMobile}
                imgDesktop={coneDesktop}
            />
            <Image
                imgMobile={sugarCubesMobile}
                imgDesktop={sugarCubesDesktop}
            />
        </div>
    );
};

export default ImagesGallery;