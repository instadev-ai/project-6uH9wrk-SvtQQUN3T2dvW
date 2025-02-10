import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary-500 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-500 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-right">
              <div className="mb-8 inline-block rounded-full bg-primary-800/50 px-4 py-2 text-sm">
                הפתרון החכם לעסקים ✨
              </div>
              
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
                פתרון חכם 
                <span className="bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  לניהול העסק שלך
                </span>
              </h1>
              
              <p className="mb-8 text-xl text-gray-300 md:text-2xl">
                פלטפורמה מתקדמת שעוזרת לך לנהל את העסק ביעילות מקסימלית
              </p>
              
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start lg:justify-end">
                <Button size="lg" className="text-lg">
                  התחל עכשיו
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  צפה בהדגמה
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 lg:justify-end">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ניסיון חינם ל-14 ימים
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ללא התחייבות
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  תמיכה 24/7
                </div>
              </div>
            </div>

            {/* Hero Image/Dashboard Preview */}
            <div className="relative mx-auto max-w-2xl lg:mr-0">
              <div className="relative rounded-xl bg-gray-900/70 p-2 shadow-2xl shadow-primary-900/50 backdrop-blur-sm">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-xl bg-gradient-to-br from-purple-400 to-blue-400 blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 blur-2xl"></div>
                
                {/* Dashboard Preview */}
                <div className="relative rounded-lg bg-gray-800 p-4">
                  {/* Dashboard Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-3 w-24 rounded bg-gray-700"></div>
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="grid gap-4">
                    <div className="h-24 rounded bg-gray-700"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 rounded bg-gray-700"></div>
                      <div className="h-32 rounded bg-gray-700"></div>
                      <div className="h-32 rounded bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Floating Card */}
              <div className="absolute -left-16 bottom-16 hidden rounded-lg bg-white p-4 shadow-xl lg:block">
                <div className="mb-2 text-sm font-medium text-gray-600">סטטיסטיקות</div>
                <div className="text-2xl font-bold text-gray-900">+127%</div>
                <div className="mt-1 text-sm text-green-500">גידול בהכנסות</div>
              </div>
            </div>
          </div>

          {/* Brands/Logos */}
          <div className="mt-20 border-t border-gray-800">
            <div className="py-8 text-center">
              <p className="mb-6 text-sm text-gray-400">חברות שסומכות עלינו</p>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="h-8 w-32 rounded bg-gray-800/50"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
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

      {/* Rest of the sections remain unchanged */}
    </div>
  );
}
