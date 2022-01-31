'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [
        {
          userId: 1,
          title: "Technology Business District",
          imageUrl: "https://i.mooool.com/img/2018/07/mooool-beiqijiaDSC02101.jpg",
          link: "https://mooool.com/en/beiqijia-technology-business-district-by-martha-schwartz-partners.html",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Art Academy",
          imageUrl: "https://images.adsttc.com/media/images/6193/8371/9a95/7a66/5a21/b4dd/slideshow/feature.jpg?1637057416",
          link: "https://www.archdaily.com/971983/china-academy-of-art-liangzhu-campus-atelier-fcjz?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Disney Concert Hall",
          imageUrl: "https://i.pinimg.com/564x/60/6f/00/606f0041a89e7a3b6abb2ba2888df3c6.jpg",
          link: "https://www.laphil.com/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Environmental Technology Building",
          imageUrl: "https://images.adsttc.com/media/images/5909/a3a6/e58e/ce23/0900/015d/slideshow/11131_MR_N115_tabloid.jpg?1493803929",
          link: "https://www.archdaily.com/870491/paccar-environmental-technology-building-lmn-architects?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Revitalized Alley",
          imageUrl: "https://blog.architizer.com/wp-content/uploads/15609761751890055_01_CityThread_3_photo_by_Garey_Gomez.jpg-768x1027.jpg",
          link: "https://architizer.com/blog/inspiration/collections/urban-revitalization/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Yuandang Bridge",
          imageUrl: "https://images.adsttc.com/media/images/61de/b14b/3e4b/31b3/5600/00b9/slideshow/BAU679_Image_006.jpg?1641984322",
          link: "https://www.archdaily.com/975018/yuandang-bridge-bau-brearley-architects-plus-urbanists?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "City Library",
          imageUrl: "https://sdg-migration-id.s3.amazonaws.com/interior-design-best-of-year-retail-beijing-bookstore-Zhongshuge-xliving-li-xiang-idx210101_boy_MixedRetail05-4.jpg",
          link: "https://interiordesign.net/projects/beijing-zhongshuge-lafayette-store-by-x-living-2020-best-of-year-winner-for-retail/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Greenway River Path",
          imageUrl: "https://www.turenscape.com/upload/project/201708/468cc889ac4fe796f391940355455314.jpg",
          link: "https://www.turenscape.com/en/project/detail/4554.html",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Culture & Tech Building",
          imageUrl: "https://cdn.homedit.com/wp-content/uploads/2014/08/Technology-Emerson-College-Campus-Entryway-768x512.jpg",
          link: "https://www.homedit.com/emerson-college-los-angeles-campus/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Greentown Plaza",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151689141-89e2eb84-7886-42c2-be51-95cc10a77900.jpg",
          link: "https://worldlandscapearchitect.com/greentown-nantong-chengyuan-zsd/?v=7516fd43adaa",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Memorial Museum",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151779086-733d86e6-a042-4dd1-8f2a-eb1c78706d90.PNG",
          link: "http://architectuul.com/architecture/view_image/shiba-ryotaro-memorial-museum/3686",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Soundwave Center",
          imageUrl: "https://images.adsttc.com/media/images/61a7/5aba/f91c/8177/5200/0035/slideshow/Opening_on_the_roof_photo_by_Jonathan_Leijonhufvud.jpg?1638357658",
          link: "https://www.archdaily.com/972823/monolithic-concert-hall-open-architecture?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Public Library",
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2F0b%2Fc3%2Fda0bc3da40ddff4d001eca5145342416.jpg&f=1&nofb=1",
          link: "https://www.spl.org/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Knowledge Park",
          imageUrl: "https://images.adsttc.com/media/images/5f6b/e89d/63c0/176b/3f00/03ff/slideshow/mod_1V3A9026a.jpg?1600907401",
          link: "https://www.archdaily.com/948325/campus-and-creative-innovation-knowledge-park-3h-architecture",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Visitor Center",
          imageUrl: "https://static.dezeen.com/uploads/2018/07/inagawa-cemetry-david-chipperfield-architecture_dezeen_2364_col_19-852x983.jpg",
          link: "https://www.dezeen.com/2018/07/18/david-chipperfield-visitor-centre-inagawa-cemetery-architecture/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Freeway Park",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151692688-5fb148cf-0bd4-4416-abc6-1651789fdb06.jpg",
          link: "https://www.hhlloo.com/a/wu-xian-ji-guang-chang.html",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Upper River Side",
          imageUrl: "https://i.pinimg.com/564x/fe/4c/d1/fe4cd13a188c2535fadc0e18d65193ce.jpg",
          link: "https://mooool.com/en/rf-properties-the-upper-river-side-phase-i-by-landview-performance.html",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Research & Training Center",
          imageUrl: "https://images.adsttc.com/media/images/5007/065f/28ba/0d41/4800/0af7/slideshow/stringio.jpg?1414102068",
          link: "https://www.archdaily.com/103509/research-and-training-centre-in-the-construction-trades-acdf?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Copenhagen Plaza Park",
          imageUrl: "https://i.pinimg.com/564x/83/5b/fc/835bfc6d7ee348a2e54fcbd26ba395d3.jpg",
          link: "https://www.visitcopenhagen.com/copenhagen/planning/superkilen-park-gdk707822",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Cemetary Garden",
          imageUrl: "https://i.pinimg.com/564x/c1/47/51/c147511f2cbbdfdcb68d4622332fd9c0.jpg",
          link: "https://landezine.com/cemetery-design-igualada/attachment/10/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Different Plaza Park",
          imageUrl: "https://i.pinimg.com/originals/f7/aa/87/f7aa873cf80572b82a7125201f840f37.jpg",
          link: "https://hzhang.photoshelter.com/image/I0000f_.gxrOBCT8",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Another Public Library",
          imageUrl: "https://archinect.imgix.net/uploads/2h/2h4gdabflewkkwtu.jpg?fit=crop&auto=compress%2Cformat&w=615",
          link: "https://archinect.com/firms/project/40542522/new-town-library-in-maranello-italy/58670357",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "City Hub Building",
          imageUrl: "https://d3igjmthvmn71a.cloudfront.net/wp-content/uploads/nottingham-city-hub-56_50477141943_o-scaled.jpg",
          link: "https://bondbryan.co.uk/project/nottingham-city-hub/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Alley Park",
          imageUrl: "https://i.mooool.com/img/2019/05/mooool-SPI-NCD-Lianfa-Zanglong-4.jpg?x-oss-process=style%2Fboombox_image545-2x",
          link: "https://mooool.com/xudc-zanglongdajing-in-hangzhou-by-s-p-i-ncd.html",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Astronomy Park",
          imageUrl: "https://images.adsttc.com/media/images/61c4/b2b0/b038/0601/6505/30fe/slideshow/18.jpg?1640280783",
          link: "https://www.archdaily.com/974128/astronomy-park-ego-group?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Memorial Lakeside Park",
          imageUrl: "https://landezine.com/wp-content/uploads/2013/10/Lakewood-Cemetery-Garden-Mausoleum-Landscape-by-Halvorson-Design-Partnership-008-730x489.jpg",
          link: "https://landezine.com/lakewood-cemetery-garden-mausoleum-landscape-by-halvorson-design-partnership/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "School Campus",
          imageUrl: "https://landezine.com/wp-content/uploads/2019/05/7.-St-Ignatius-Riverview-PaulMcMillan.jpg",
          link: "https://landezine.com/therry-courtyard-st-ignatius-riverview-by-arcadia-landscape-architecture/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Office Parklet",
          imageUrl: "https://i.pinimg.com/originals/ce/f7/48/cef748b2d9d35b8cc72f70810906d77b.jpg",
          link: "https://www.terrain-studio.com/projects/helios-plaza",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "City Library",
          imageUrl: "https://i.pinimg.com/564x/17/16/30/1716309308a8c36a77b6e1ac42752515.jpg",
          link: "https://www.designboom.com/architecture/turanga-christchurch-central-library-schmidt-hammer-lassen-new-zealand-10-17-2018/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Memorial Park",
          imageUrl: "https://worldstrides.com/wp-content/uploads/2015/10/Tour-Highlight-Vietnam-and-Monument-_-iStock_000063717879_Large-min.jpg",
          link: "https://www.vvmf.org/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Seafront Towers",
          imageUrl: "https://images.adsttc.com/media/images/5b95/3b0a/f197/cc77/b300/0072/slideshow/%E6%B3%B3%E6%B1%A0.jpg?1536506602",
          link: "https://www.archdaily.com/901714/tencent-seafront-towers-interior-design-b-plus-h-architects?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "NYC Streetscape Plaza",
          imageUrl: "https://www.cabinetmagazine.org/issues/45/cabinet_045_trainor_james_006.jpg",
          link: "https://www.cabinetmagazine.org/issues/45/trainor.php",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Urban Development Plaza",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151692935-f7cb4ff0-1f4b-4823-adcf-43f59a0137de.PNG",
          link: "https://www.archdaily.com/943348/v-plaza-urban-development-3deluxe",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Fountain Park",
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F96%2F7e%2F93%2F967e93b456c0c37580e4a8eb3fe5941d.jpg&f=1&nofb=1",
          link: "https://www.portland.gov/parks/lovejoy-fountain-park",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "9/11 Memorial",
          imageUrl: "https://landezine.com/wp-content/uploads/2013/03/National-9_11-Memorial-by-PWP-Landscape-Architecture-02.jpg",
          link: "https://landezine.com/national-911-memorial-by-pwp-landscape-architecture/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Climbing Gym",
          imageUrl: "https://images.adsttc.com/media/images/5fb9/b902/63c0/17dd/6300/0387/slideshow/Stephane_Brugger_3.jpg?1606007036",
          link: "https://www.archdaily.com/951885/chimneys-overhangs-and-anchors-the-architecture-of-climbing-gyms?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_all",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Civic Building",
          imageUrl: "https://www.architectureanddesign.com.au/getmedia/ff14a241-b6e6-46dc-9b2f-abb2abe2534f/110905_library_viaCouncil.aspx?&ext=.jpg",
          link: "https://www.architectureanddesign.com.au/news/industry-news/kerry-hill-designs-perth-library-first-civic-build#",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Street Park",
          imageUrl: "https://i.pinimg.com/564x/f1/22/6d/f1226d6e3640c471bb5d7ef2bfaee951.jpg",
          link: "https://in.pinterest.com/pin/379920918566750792/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Healing Memorial Square",
          imageUrl: "https://i.pinimg.com/564x/0b/73/ab/0b73ab7afc66fd0ce84501abe9e54385.jpg",
          link: "https://www.architecturaldigest.com/story/gaeta-springall-arquitectos-mexico-city-memorial-to-victims-of-violence?epik=dj0yJnU9T29MVVplaVJJTDUxV1hycmJ5eGZfMmVfXzBybWwzbFUmcD0wJm49ME9nd2dUYkNyMWtsVmJWdFlPRDQxQSZ0PUFBQUFBR0gzR1h3",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Street Intersection Park Plaza",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151689109-ec42e648-14fb-4fde-98cc-48ec3158b0af.jpg",
          link: "http://www.archina.com/index.php?g=ela&m=index&a=works&id=3133",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Midtown Center Plaza",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151689091-a513a62c-5615-48c6-8602-369680743666.jpg",
          link: "https://worldlandscapearchitect.com/scape-design-for-midtown-center-plaza-recalls-diagonal-paths-of-the-lenfant-plan-for-washington-d-c/?v=7516fd43adaa#.W7CcgHszaUk",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "War Memorial",
          imageUrl: "https://i.pinimg.com/564x/c0/95/0a/c0950a87cec1e4b93ce525067bac98a5.jpg",
          link: "http://www.tzg.com.au/project/aus-war-memorial/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Plaza Deichmann",
          imageUrl: "https://images.adsttc.com/media/images/5129/673b/b3fc/4b11/a700/6b17/large_jpg/1295360771-bg170111-07.jpg?1414308330",
          link: "https://www.plataformaarquitectura.cl/cl/02-71033/plaza-deichmann-chyutin-architects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Office Building",
          imageUrl: "https://images.adsttc.com/media/images/6155/0e56/9f88/b401/642c/a9a9/slideshow/1091-n108-a3digital.jpg?1632964250",
          link: "https://www.archdaily.com/969372/ancora-40-office-building-buckley-gray-yeoman?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Rotating Street Park",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151689049-d8f7dc53-9056-43f3-a373-0ac2c6f15017.jpg",
          link: "https://www.gooood.cn/waiting-for-the-next-ten-minutes-u-center-plaza-by-z-t-studio.htm",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Remembrace Parklet",
          imageUrl: "https://landezine.com/wp-content/uploads/2010/01/g028_dno_10_tb2.jpg",
          link: "https://landezine.com/the-nieuwe-ooster/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "College Library",
          imageUrl: "https://static.dezeen.com/uploads/2016/10/weston-library-wilkinson-eyre-architecture-education-university-of-oxford-uk_dezeen_2364_ss_6-1.jpg",
          link: "https://www.dezeen.com/2016/10/06/wilkinson-eyre-renovation-giles-gilbert-scott-oxford-university-bodleian-weston-library/amp/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Gateway One",
          imageUrl: "https://i.pinimg.com/564x/3c/d7/ae/3cd7ae49257b42096e64371e457eed55.jpg",
          link: "https://www.arch2o.com/gateway-one-shekou-spark-architects/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Pondside Cemetary",
          imageUrl: "https://landezine.com/wp-content/uploads/2011/01/Karres-en-Brands-landscape-architecture-cemetery-Langedijk-Entrance-building-Onix_-photo-Saph_Rob-de-Jong.jpg",
          link: "https://landezine.com/langedijk-cemetery-by-karres-en-brands-landscape-architecture/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Public Street Park",
          imageUrl: "https://www.s-onsite.com/onsite_images/80/TNC-KF-004-D-_C_.jpg",
          link: "https://www.s-onsite.com/works/detail.html?id=80",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "University Hall",
          imageUrl: "https://images.adsttc.com/media/images/61db/214f/1af7/4a01/65e0/bfa4/slideshow/21-morgan-state-university-credit-nic-lehoux.jpg?1641751012",
          link: "https://www.archdaily.com/974813/calvin-and-tina-tyler-hall-morgan-state-university-teeple-architects?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Children's Street Park",
          imageUrl: "https://100architects.com/wp-content/uploads/2019/09/DSC_1084-1.jpg",
          link: "https://100architects.com/project/big-bang/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Naval Cemetary",
          imageUrl: "https://i.pinimg.com/564x/d1/30/f5/d130f58565786f57901a86370c660fcf.jpg",
          link: "https://www.nbwla.com/projects/park/naval-cemetery-landscape",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Leisure Library",
          imageUrl: "https://static.dezeen.com/uploads/2017/11/tianjin-binhai-library-mvrdv-architecture-public-and-leisure-china_dezeen_2364_col_13-852x568.jpg",
          link: "https://www.dezeen.com/2017/11/04/mvrdv-tianjin-binhai-public-library-giant-eye-china-winy-maas/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Memorial Square",
          imageUrl: "https://media.architecturaldigest.com/photos/55e7633e302ba71f30163949/master/w_1920%2Cc_limit/dam-images-architecture-the-ten-most-significant-memorial-buildings-memorials-09-pentagon-memorial.jpg",
          link: "https://www.architecturaldigest.com/gallery/memorial-architecture-slideshow?epik=dj0yJnU9dnVWRUI4NUd1YklXa3A5YVE4UGpXd3JwWW9udUxXNVAmcD0wJm49dmotZmJvTlBPZExVaTcxaVIwWG1OQSZ0PUFBQUFBR0gzRWhz",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Urban Bloom",
          imageUrl: "https://i.pinimg.com/564x/65/a2/f6/65a2f69ce38109a4da8dba280242690f.jpg",
          link: "https://noticias.arq.com.mx/Detalles/23881.html",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Skybridge Garden Park",
          imageUrl: "https://arquitecturayempresa.es/sites/default/files/content/arquitectura_mykd_crown_sky_garden_george_heinrich_06.jpg",
          link: "https://arquitecturayempresa.es/noticia/arquitectura-para-mejorar-la-salud-crown-sky-garden-de-mikyoung-kim",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Growth Campus",
          imageUrl: "https://images.adsttc.com/media/images/6116/29e1/f91c/816f/a100/02dd/slideshow/%CE%A6%E2%96%92%C3%AD%CF%83%E2%96%92%E2%96%92%C2%B5%C3%A1%C3%AD%CF%83%C3%AE%E2%95%912007_2021_(24).jpg?1628842439",
          link: "https://www.archdaily.com/966754/witnessing-the-growth-of-xiangshan-campus-of-china-academy-of-art-2007-vs-2021?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_all",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Waterfall Walkway",
          imageUrl: "https://i.pinimg.com/564x/bb/e3/03/bbe3034cdf870dcbfe54b83b472e7813.jpg",
          link: "https://www.designcurial.com/news/the-jungle-block-marina-one-6716694/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Sunset Parklet",
          imageUrl: "https://www.contemporist.com/wp-content/uploads/2015/07/parklet_020715_06.jpg",
          link: "https://www.contemporist.com/san-francisco-replaces-street-parking-with-the-sunset-parklet/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Hyperlane",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151689021-c86080b3-30fc-4a2d-820c-dec025b233b9.jpg",
          link: "https://www.designboom.com/architecture/aspect-studios-hyperlane-chengdu-china-07-20-2020/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Firefighter Memorial",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151722213-9c8e753a-66d6-43e8-bd32-cf7717ee33b8.PNG",
          link: "https://worldlandscapearchitect.com/canadian-firefighters-memorial-ottawa-canada-plant-architect-inc/?v=7516fd43adaa",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Performing Arts Center",
          imageUrl: "https://images.adsttc.com/media/images/6172/e8fb/ad53/d719/aa1c/2e39/slideshow/01.jpg?1634920750",
          link: "https://www.archdaily.com/970675/ted-ankara-college-foundation-performing-arts-center-uygur-architects?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Environmental Design Campus",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151778805-3b6d3b90-0f80-442b-ba1b-67ea4045cb5a.PNG",
          link: "http://ohtori-c.com/2015/08/12/guangzhou-vanke-cloud-city/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Skybridge Park",
          imageUrl: "https://dspncdn.com/a1/media/692x/10/8a/da/108ada857fcc128b5f09d48ade8e1bbd.jpg",
          link: "https://www.designspiration.com/save/1600184171334/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Town River Reconstruction",
          imageUrl: "https://images.adsttc.com/media/images/5451/ae44/e58e/ce64/0100/009d/slideshow/portada_MG_2569_%C3%B5%C2%A9%C3%87%C2%B5%C2%A3%C6%92.jpg?1414639167",
          link: "https://www.archdaily.com/563128/zhangjiagang-town-river-reconstruction-botao-landscape",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Lakeside Cemetary",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151721339-31a81b41-66c0-41c5-9638-863fe18db418.PNG",
          link: "https://www.spoon-tamago.com/2016/01/25/the-remarkable-sayama-lakeside-cemetery-by-hiroshi-nakamura-nap/#more-34834",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Eagle Studio",
          imageUrl: "https://images.adsttc.com/media/images/5f21/451e/b357/653d/3a00/07e3/slideshow/DSCF3861%C2%A9%E7%94%B0%E6%96%B9%E6%96%B9.jpg?1596015890",
          link: "https://www.archdaily.com/944700/eagle-studio-waa?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Floating Skybridge Park",
          imageUrl: "https://images.adsttc.com/media/images/5f54/b6b9/b357/6574/5200/0414/slideshow/Vitality_island%EF%BC%883%EF%BC%89.jpg?1599387311",
          link: "https://www.archdaily.com/947168/floating-archipelago-pedestrian-bridge-design-fcha?ad_medium=gallery",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "National Memorial",
          imageUrl: "https://massdesigngroup.org/sites/default/files/styles/lightbox/public/primarycarousel/2018AK19_118.jpg?itok=zx72ZZmK",
          link: "https://massdesigngroup.org/work/design/national-memorial-peace-and-justice",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Public Sauna",
          imageUrl: "https://images.adsttc.com/media/images/5bcb/72b6/f197/cc4e/4000/0051/slideshow/20180913-soriamoria-0780.jpg?1540059820",
          link: "https://www.archdaily.com/904351/soria-moria-sauna-feste-landscape-architecture?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Cemetary Center",
          imageUrl: "https://www.thelagroup.com/wp-content/uploads/2017/05/LAG-JER893_1000x600.jpg",
          link: "https://www.thelagroup.com/2017/05/15/dedication-cemetery-design/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "School Rooftop Plaza",
          imageUrl: "https://images.adsttc.com/media/images/61d7/ea9e/336e/2873/4574/5495/slideshow/001-top.jpg?1641540284",
          link: "https://www.archdaily.com/974738/tokyo-institute-of-technology-hisao-and-hiroko-taki-plaza-kengo-kuma-and-associates?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Subway Station",
          imageUrl: "https://images.adsttc.com/media/images/6189/0b09/f91c/81ef/1800/0023/slideshow/%E5%9F%BA%E6%9C%AC%E5%9E%8B%E7%A7%BB%E5%8A%A8%E9%A9%BF%E7%AB%99-A8_%E8%8B%8F%E5%B7%9E%E6%98%86%E4%BB%91%E7%BB%BF%E5%BB%BA%E6%9C%A8%E7%BB%93%E6%9E%84%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%881%EF%BC%89.jpg?1636371183",
          link: "https://www.archdaily.com/971527/shanghai-fish-mobile-station-tjad-pro-li-zhenyu-studio?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "World War Memorial",
          imageUrl: "https://static.dezeen.com/uploads/2015/11/Mausoleum-of-the-Martyrdom-of-Polish-Villages-in-Michniow_Nizio-Design-International_dezeen_936_8.jpg",
          link: "https://www.dezeen.com/2015/11/30/mausoleum-martyrdom-of-polish-villages-massacre-site-michniow-second-world-war-miroslaw-nizio/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Rooftop Park",
          imageUrl: "https://images.adsttc.com/media/images/61d5/9dce/23d7/e813/6a89/1fb8/slideshow/trop-anvilla-did-studio-03.jpg?1641390084",
          link: "https://www.archdaily.com/974616/an-villa-trop-terrains-plus-open-space?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Temple Hilltop",
          imageUrl: "https://s2.glbimg.com/0wp4OwyLNv8WtL86cSScyCD4pVk=/smart/e.glbimg.com/og/ed/f/original/2017/08/04/tadao-ando-the-hill-of-the-buddha-sapporo-japan-designboom-00.jpg",
          link: "https://casavogue.globo.com/Arquitetura/noticia/2017/08/tadao-ando-constroi-templo-verde-ao-redor-de-buda-gigante.html",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Parkway Outlet",
          imageUrl: "https://images.adsttc.com/media/images/61b0/b95e/f7cf/d31e/fe36/e9e2/slideshow/07-al-musallah-photographer-mikkel-frost.jpg?1638971763",
          link: "https://www.archdaily.com/973260/al-hosn-masterplan-and-landscape-cebra?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Student Activity Center",
          imageUrl: "https://images.adsttc.com/media/images/5510/ea22/e58e/ce15/1100/03a6/large_jpg/portada_UTActivityCtr24_(Custom).jpg?1427171842",
          link: "https://www.archdaily.com/612641/student-activity-center-overland-partners-wtw-architects?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Waterfront Park",
          imageUrl: "https://images.adsttc.com/media/images/618b/9d43/9a95/7a01/645d/5dcc/slideshow/feature.jpg?1636539745",
          link: "https://www.archdaily.com/971635/shenzhen-baoan-waterfront-cultural-park-aube-conception?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Contemplative Cemetary Park",
          imageUrl: "https://i.pinimg.com/564x/b7/21/56/b72156680d05bcfb071f53504c32481a.jpg",
          link: "https://www.designboom.com/architecture/crisa-santos-memorial-park-sao-paulo-parque-das-cerejeiras-cemetery-brazil-11-25-2018/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Acaponeta Public Park",
          imageUrl: "https://images.adsttc.com/media/images/61e0/7f01/3e4b/314c/6e00/003f/slideshow/12_Espacio_Publico_Acaponeta__CCA_Centro_de_Colaboraci%C3%B3n_Arquitect%C3%B3nica_ok.jpg?1642102514",
          link: "https://www.archdaily.com/975188/acaponeta-public-park-cca-centro-de-colaboracion-arquitectonica?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_projects",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Remembrance Site",
          imageUrl: "https://archinect.imgix.net/uploads/fv/fvngqliqbfmexvne.jpg?fit=crop&auto=compress%2Cformat&w=615",
          link: "https://archinect.com/firms/project/33961/mit-collier-memorial/149996114",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Patchwork Park",
          imageUrl: "https://maraniarchitects.com/wp-content/uploads/2015/08/012_SO.09_Plaza-II-01-1024x685.jpg",
          link: "https://maraniarchitects.com/project/park/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Inner Building",
          imageUrl: "https://images.adsttc.com/media/images/55d3/c12e/e58e/cea1/ec00/009a/slideshow/portada_3.jpg?1439940898",
          link: "https://www.archdaily.com/772124/richard-ivey-building-hariri-pontarini-architects?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Park Garden",
          imageUrl: "https://i.mooool.com/img/2019/10/mooool-IAPA-Pty.-Ltd.-POLY-PARC-GARDEN1.jpg",
          link: "https://mooool.com/en/poly-prac-garden-by-iapa-pty-ltd.html",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Memorial Brick Building",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151722177-85733457-cc0c-4c00-946e-fa1b26e24f6d.PNG",
          link: "https://www.designboom.com/architecture/kimmel-eshkolot-mount-herzl-memorial-hall-jerusalem-israel-02-06-2018/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "City Hills Park",
          imageUrl: "https://i.mooool.com/img/2019/10/mooool-IAPA-Pty.-Ltd.-POLY-PARC-GARDEN5.jpg",
          link: "https://mooool.com/poly-prac-garden-by-iapa-pty-ltd.html",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "School Building",
          imageUrl: "https://images.adsttc.com/media/images/5e5d/13c4/6ee6/7e88/ef00/021d/slideshow/Ros_Kavanagh.jpg?1583158203",
          link: "https://www.archdaily.com/934727/grafton-architects-get-to-know-2020-pritzker-winners-built-work?ad_source=search&ad_medium=projects_tab&ad_source=search&ad_medium=search_result_all",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "College Campus",
          imageUrl: "https://images.adsttc.com/media/images/59ca/4d93/b22e/38e8/8300/0055/slideshow/Rocco_Chu_Hai_College_Photo01.jpg?1506430350",
          link: "https://www.archdaily.com/880408/new-campus-development-of-chu-hai-college-of-higher-education-rocco-design-architects?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Memorial Museum Park",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151722147-9ae8c85f-e681-451a-9a69-ed6a01750e3f.PNG",
          link: "https://www.designboom.com/architecture/wenchuan-earthquake-memorial-museum-sichuan-china-cai-yongjie-tongji-university-07-25-2016/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Greenway Plaza",
          imageUrl: "https://i.pinimg.com/564x/a0/80/c8/a080c85651974b5287a451f4a32e277a.jpg",
          link: "https://issuu.com/hidesignpublish/docs/corporatecommerciallandscape/123?epik=dj0yJnU9M2dJcjVydGctV0Z4UTNSN0tyeU1QWFRDeEdsVWUwdG8mcD0wJm49ei1DXzRTM2RwLXBJM1d4bU9IQnlFdyZ0PUFBQUFBR0gyUjA0",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Symantec Chengdu Campus",
          imageUrl: "https://landezine.com/wp-content/uploads/2015/06/Symantec-Chengdu-Tom-Fox-01.jpg",
          link: "https://landezine.com/symantec-chengdu-campus-by-swa/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Shifting Cubes",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151722113-a2a371ed-474b-4531-b15c-279ed8fa20b6.PNG",
          link: "https://www.designboom.com/architecture/idin-architects-lima-duva-resort-koh-samed-thailand-09-18-2015/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "College Center for Design",
          imageUrl: "https://images.adsttc.com/media/images/6141/aaec/c5a0/d71a/3318/067f/slideshow/1805-07-1.jpg?1631693573",
          link: "https://www.archdaily.com/968515/the-santa-monica-college-center-for-media-and-design-clive-wilkinson-architects?ad_source=search&ad_medium=projects_tab",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Pond Park",
          imageUrl: "https://i.pinimg.com/564x/de/21/ba/de21ba402f5b98390c85b1e748e207a9.jpg",
          link: "https://www.hhlloo.com/#/projectDetail?project_id=201903261553569696",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Memorial Parklet",
          imageUrl: "https://user-images.githubusercontent.com/86431563/151721128-0e6d726a-9004-4994-bc6d-462f768fd046.PNG",
          link: "https://www.contemporist.com/sousse-and-bardo-memorial-opens-in-birminghams-cannon-hill-park/",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "City Garden",
          imageUrl: "https://i.pinimg.com/564x/de/dd/a5/dedda50611efcbdeebccaac7526f170a.jpg",
          link: "https://www.architonic.com/en/story/susanne-junker-the-venetian-city-garden/7000395?epik=dj0yJnU9YmZQT05UVTQ3UWpIYTVmLVRqdWpZNzAtSTV3YWRUZ2ImcD0wJm49dG9WMy1sSWxqa1kxcFF6RGZseXpHQSZ0PUFBQUFBR0gzR2NR",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
