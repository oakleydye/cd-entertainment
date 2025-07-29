-- CreateTable
CREATE TABLE "about" (
    "id" SERIAL NOT NULL,
    "about_us_description" TEXT NOT NULL,
    "about_us_image_path" TEXT NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_types" (
    "id" SERIAL NOT NULL,
    "event_type_name" TEXT NOT NULL,

    CONSTRAINT "event_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faqs" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "faqs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_packages" (
    "id" SERIAL NOT NULL,
    "package_name" TEXT NOT NULL,
    "package_description" TEXT NOT NULL,
    "package_price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "price_packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_package_features" (
    "id" SERIAL NOT NULL,
    "feature_name" TEXT NOT NULL,
    "feature_description" TEXT NOT NULL,
    "price_package_id" INTEGER NOT NULL,

    CONSTRAINT "price_package_features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_summaries" (
    "id" SERIAL NOT NULL,
    "service_name" TEXT NOT NULL,
    "service_description" TEXT NOT NULL,
    "service_image_path" TEXT NOT NULL,
    "page_id" INTEGER NOT NULL,
    "url_slug" TEXT NOT NULL,

    CONSTRAINT "service_summaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counters" (
    "id" SERIAL NOT NULL,
    "counter_name" TEXT NOT NULL,
    "counter_value" INTEGER NOT NULL,
    "show_plus" BOOLEAN NOT NULL,

    CONSTRAINT "counters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "song_requests" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artist_names" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "request_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "song_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_form_submissions" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "event_type_id" INTEGER NOT NULL,
    "date_of_event" TIMESTAMP(3) NOT NULL,
    "venue_location" TEXT NOT NULL,
    "event_description" TEXT NOT NULL,
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_form_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_settings" (
    "id" SERIAL NOT NULL,
    "accepting_song_requests" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "app_settings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "price_package_features" ADD CONSTRAINT "price_package_features_price_package_id_fkey" FOREIGN KEY ("price_package_id") REFERENCES "price_packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
