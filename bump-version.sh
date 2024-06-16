#!/bin/bash

# Check if a version argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <new-version>"
  exit 1
fi

# Store the new version
NEW_VERSION=$1

# ------------ package.json ------------
# Read the package.json file and update the version
sed -i.bak -E "s/\"version\": \"[^\"]+\"/\"version\": \"$NEW_VERSION\"/" package.json

# Remove the backup file created by sed
rm package.json.bak

# ------------ Android file: app/build.gradle ------------
# Update the versionName in android/app/build.gradle
sed -i.bak -E "s/versionName \"[^\"]+\"/versionName \"$NEW_VERSION\"/" android/app/build.gradle

# Increment the versionCode in android/app/build.gradle
# Read the current versionCode
CURRENT_VERSION_CODE=$(grep -o "versionCode [0-9]\+" android/app/build.gradle | awk '{print $2}')
NEW_VERSION_CODE=$((CURRENT_VERSION_CODE + 1))

# Replace the versionCode with the new incremented versionCode
sed -i.bak -E "s/versionCode [0-9]+/versionCode $NEW_VERSION_CODE/" android/app/build.gradle

# Remove the backup file created by sed
rm android/app/build.gradle.bak

# ------------ IOS file:  ------------
# Update the CURRENT_PROJECT_VERSION and MARKETING_VERSION in ios/NubbleApp.xcodeproj/project.pbxproj
PROJECT_PBXPROJ="ios/NubbleApp.xcodeproj/project.pbxproj"

# Update MARKETING_VERSION
sed -i.bak -E "s/MARKETING_VERSION = [^\;]+;/MARKETING_VERSION = $NEW_VERSION;/" "$PROJECT_PBXPROJ"

# Increment CURRENT_PROJECT_VERSION
CURRENT_IOS_VERSION=$(grep -m 1 -o "CURRENT_PROJECT_VERSION = [0-9]\+" "$PROJECT_PBXPROJ" | awk '{print $3}')
NEW_IOS_VERSION=$((CURRENT_IOS_VERSION + 1))

sed -i.bak -E "s/CURRENT_PROJECT_VERSION = [0-9]+;/CURRENT_PROJECT_VERSION = $NEW_IOS_VERSION;/" "$PROJECT_PBXPROJ"

rm "$PROJECT_PBXPROJ.bak"
