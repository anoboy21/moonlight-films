import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        <span>Copyright </span>
        <span className="hidden md:block"> &copy; 2022</span>
      </p>
      <div className="flex gap-3 items-center">
        <p className="hidden md:block">Contact me: </p>
        <div className="flex gap-2">
                    <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <BsFacebook size={22} />
          </a>
        </div>
      </div>
    </div>
    <script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4710162,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4710162&101" alt="" border="0"></a></noscript>
  );
};

export default Footer;
