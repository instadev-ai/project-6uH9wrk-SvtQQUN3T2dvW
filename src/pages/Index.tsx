import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
            פתרון חכם לניהול העסק שלך
          </h1>
          <p className="mb-8 text-xl text-gray-600 md:text-2xl">
            פלטפורמה מתקדמת שעוזרת לך לנהל את העסק ביעילות מקסימלית
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-x-reverse sm:space-y-0">
            <Button size="lg" className="text-lg">
              התחל עכשיו
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              צפה בהדגמה
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">+1,000</div>
              <div className="mt-2 text-gray-600">לקוחות מרוצים</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">99.9%</div>
              <div className="mt-2 text-gray-600">זמן פעילות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="mt-2 text-gray-600">תמיכה טכנית</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
