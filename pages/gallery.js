import { GalleryCard } from "../components/card";
import Layout from "../components/layout";

export default function Gallery() {
  return (
    <Layout active="Gallery">
      <h1 className="heading">
        Projects <div className="inline opacity-50">&</div> Portfolio<div className="inline opacity-50">.</div>
      </h1>

      <h2 className="gallerySubhead">Major Projects & In Progress</h2>
      <div className="mt-12 mr-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <GalleryCard 
          title="Stanford Statistics for Social Good"
          href="https://stats-for-good.stanford.edu/"
          children="Statistical analysis for opioids."
        />
      </div>
      <br />
      <h2 className="gallerySubhead">More<div className="inline opacity-50">...</div></h2>
      <div className="mt-12 mr-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <GalleryCard
          title="Andover Computer Science Club"
          children="We meet weekly and run fun workshops to inspire members of various levels of expertise to find joy in making and creating with code! As co-president, I have worked on liaising with faculty advisors, applying for alumni Abbot Grants, organizing various speaker series and longer-form competitions, and so on."
        />
      </div>
      <br />
      <h2 className="gallerySubhead">Previous <div className="inline opacity-50">/</div> Hiatus</h2>
      <div className="mt-12 mr-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <GalleryCard
          title="Phillipian Managing Editor"
          href="https://phillipian.net"
          children="Managing Editor of Phillips Academy's *The Phillipian* CXLVI (previously a News Associate Editor). Working on exploring *[data journalism](https://sota.phillipian.net)*, amplifying **[voices to marginalized communities on campus](https://latinelegacy.phillipian.net)**, and so on. :)"
        />
      </div>

    </Layout>
  );
}
