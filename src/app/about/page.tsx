import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-100 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                See What God Can Do Through You
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We are here to help you deepen your faith and discover your purpose.
              </p>
              <p className="text-muted-foreground mb-8">
                Since 2006, we've witnessed people begin a relationship with Christ and grow in their faith across
                our multiple physical locations and around the globe through our online ministry. From meaningful
                worship to relatable sermons, you'll experience hope and strengthen your faith as you discover
                who God has made you to be.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-elevation-dark text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              We exist so that people far from God will be raised to life in Christ.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Beliefs</h3>
                <p className="mb-6">
                  What do we believe about God, faith, and the Bible? Check out how God's Word guides our beliefs.
                </p>
                <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                  <Link href="/beliefs-values#what-we-believe">Learn more</Link>
                </Button>
              </div>

              <div className="bg-black/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="mb-6">
                  Learn more about the values that keep us focused on what truly matters – reaching people with the gospel.
                </p>
                <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                  <Link href="/beliefs-values#how-we-think">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find the right experience for you</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                No matter where you are, there's a way for you to be part of all God is doing.
                Whether online or in-person, join us for church and connect with our church community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/3463242785/1198186214.webp"
                  alt="Physical Campus"
                  className="w-full aspect-[4/3] object-cover"
                  crossOrigin="anonymous"
                />
                <div className="p-6 bg-gray-50">
                  <h3 className="font-bold text-xl mb-2">Join us in-person</h3>
                  <p className="text-muted-foreground mb-4">
                    Worship with us in person at one of our 19 campuses.
                  </p>
                  <Button asChild variant="outline" className="rounded-full w-full">
                    <Link href="/locations">Find a location</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/1773292928/53675696.webp"
                  alt="Watch Party"
                  className="w-full aspect-[4/3] object-cover"
                  crossOrigin="anonymous"
                />
                <div className="p-6 bg-gray-50">
                  <h3 className="font-bold text-xl mb-2">Bring church to you</h3>
                  <p className="text-muted-foreground mb-4">
                    Gather with your local community to worship together.
                  </p>
                  <Button asChild variant="outline" className="rounded-full w-full">
                    <Link href="/watch-parties/about">Find a watch party</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/763745910/3827906442.webp"
                  alt="Join Online"
                  className="w-full aspect-[4/3] object-cover"
                  crossOrigin="anonymous"
                />
                <div className="p-6 bg-gray-50">
                  <h3 className="font-bold text-xl mb-2">Join us online</h3>
                  <p className="text-muted-foreground mb-4">
                    eFam is our online family who stream church from wherever they are.
                  </p>
                  <Button asChild variant="outline" className="rounded-full w-full">
                    <Link href="/streaming">Find a time</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/1195740054/2881109792.webp"
                  alt="Pop-Up"
                  className="w-full aspect-[4/3] object-cover"
                  crossOrigin="anonymous"
                />
                <div className="p-6 bg-gray-50">
                  <h3 className="font-bold text-xl mb-2">Pop-Up</h3>
                  <p className="text-muted-foreground mb-4">
                    Pop-Ups are how we bring the worship experience to a city near you.
                  </p>
                  <Button asChild variant="outline" className="rounded-full w-full">
                    <Link href="/pop-ups">Find a Pop-Up</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pastors Steven & Holly Furtick</h2>
              <p className="text-base text-muted-foreground">Meet Our Pastors</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src="https://ext.same-assets.com/3351686216/1912300274.webp"
                  alt="Pastors Steven and Holly Furtick"
                  className="w-full rounded-lg"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-4">
                  Together, Pastors Steven and Holly Furtick lead Elevation Church in Charlotte, NC,
                  and are parents to their three kids – Elijah, Graham, and Abbey.
                </p>
                <p className="mb-4">
                  As the founder and lead pastor of Elevation Church, Steven Furtick has helped Elevation grow
                  from a multi-site church into a global ministry through online streaming, television, and the
                  music of Elevation Worship. He is a GRAMMY Award-winning songwriter and producer and a New York
                  Times best-selling author. He holds a Master of Divinity degree from Southern Theological Seminary
                  and is the author of <em>Crash the Chatterbox</em>, <em>Greater</em>, <em>Sun Stand Still</em>, <em>(Un)Qualified</em>,
                  <em>Seven-Mile Miracle</em>, and his latest book, <em>Do the New You</em>.
                </p>
                <p className="mb-6">
                  Holly Furtick is co-founder and pastor at Elevation Church. She has authored multiple Bible studies
                  and is known for her relevant and relatable teachings. When she's not caring for family or serving
                  in ministry alongside her husband, Holly spends her time cooking and listening to audiobooks
                  (usually at the same time), tracking down her virtual book club's next read.
                </p>
                <div className="flex gap-4">
                  <Button asChild className="rounded-full">
                    <Link href="https://stevenfurtick.com">stevenfurtick.com</Link>
                  </Button>
                  <Button asChild className="rounded-full">
                    <Link href="https://hollyfurtick.com">hollyfurtick.com</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Here's what you can look forward to.</h2>
              <p className="text-base text-muted-foreground">What to Expect</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                At Elevation, you'll encounter Christ through Biblical teaching and uplifting worship and be given
                opportunities that will empower you to live out your faith.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <img
                  src="https://ext.same-assets.com/301851342/1884197969.webp"
                  alt="Sermons that equip you to grow in your faith"
                  className="w-full rounded-lg mb-6"
                  crossOrigin="anonymous"
                />
                <h3 className="text-2xl font-bold mb-4">Sermons that equip you to grow in your faith</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're new to your faith or have been a follower of Christ for a long time,
                  Pastor Steven's messages will deepen your understanding of the Bible and challenge you to
                  grow in your relationship with God. You'll learn about how the Bible impacts your life today
                  and you'll learn practical strategies to apply it to your life.
                </p>
                <p className="text-muted-foreground mb-6">
                  Each week, you'll discover practical insights and spiritual guidance relevant to everyday challenges.
                  You'll find encouragement to take steps of faith, strengthen your connection with God, and discover
                  His purpose for your life. We hope to help you get God's word deeper in your heart to carry you
                  through every season of life.
                </p>
                <Button asChild className="rounded-full">
                  <Link href="/sermons">Watch more sermons online</Link>
                </Button>
              </div>

              <div>
                <img
                  src="https://ext.same-assets.com/4008640497/2871488207.webp"
                  alt="Worship that invites you to encounter Jesus"
                  className="w-full rounded-lg mb-6"
                  crossOrigin="anonymous"
                />
                <h3 className="text-2xl font-bold mb-4">Worship that invites you to encounter Jesus</h3>
                <p className="text-muted-foreground mb-6">
                  Every experience, whether in person or online, will include a time of worship. We worship to express
                  gratitude and devotion to God through songs. But it's more than just music – it creates space for
                  God to transform your heart as you focus on His goodness and faithfulness. In these moments, we set
                  aside our daily concerns and focus on worshiping God, allowing His presence to refresh and renew us.
                </p>
                <p className="text-muted-foreground mb-6">
                  Elevation Worship is the musical expression of Elevation Church. Their songs and albums will inspire
                  your faith to get you through each day, believing God for even greater things tomorrow. Whether you
                  worship at church on Sunday, at home, or in your car, these songs are designed to uplift your spirit
                  and encourage you in your faith journey.
                </p>
                <Button asChild className="rounded-full">
                  <Link href="https://www.elevationworship.com/">Learn more about Elevation Worship</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
