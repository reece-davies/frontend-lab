import Link from 'next/link';

export default function CenterDiv() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-[60vh] border-2 border-dotted"> 

      <h2>
  These were taken from Meraki UI:{" "}
  <a
    href="https://merakiui.com/components/application-ui/alerts"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 underline hover:text-blue-700"
  >
    https://merakiui.com/components/application-ui/alerts
  </a>
</h2>
      <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-center w-12 bg-emerald-500">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
        </div>

          <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                  <span className="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
                  <p className="text-sm text-gray-600 dark:text-gray-200">Your account was registered!</p>
              </div>
          </div>
      </div>

      <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-center w-12 bg-blue-500">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
            </svg>
        </div>

        <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
                <span className="font-semibold text-blue-500 dark:text-blue-400">Info</span>
                <p className="text-sm text-gray-600 dark:text-gray-200">This channel archived by the owner!</p>
            </div>
        </div>
    </div>

    <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-center w-12 bg-yellow-400">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
          </svg>
      </div>

      <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
              <span className="font-semibold text-yellow-400 dark:text-yellow-300">Warning</span>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                  Your image size is too large!
              </p>
          </div>
      </div>
  </div>

  <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-center w-12 bg-red-500">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
          </svg>
      </div>

      <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
              <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                  Your email is already used!
              </p>
          </div>
      </div>
    </div>

    </div>
  );
}
