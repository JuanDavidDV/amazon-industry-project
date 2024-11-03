# Amazon Review System

A review and badge reward system that allows verified purchasers to submit and peer review product reviews.

## Features

### Review System
- Submit reviews for purchased products
- Verify purchases with unique verification codes
- Prevent duplicate reviews for same purchase
- Peer review system requiring 2 approvals

### Badge & Achievement System
Achievement Levels:
- BRONZE (Default)
- SILVER 
- GOLD
- PLATINUM (30+ approved reviews)
- DIAMOND (50+ approved reviews)

Special Badges:
- VERIFIED_REVIEWER
- HELPFUL_PEER_REVIEWER 
- EXPERT_REVIEWER
- CATEGORY_SPECIALIST
- TRUSTED_VOICE

## Technical Implementation

###

AMAZON REVIEW SYSTEM - BACKEND IMPLEMENTATION

1. DATABASE SETUP (db.js)
------------------------
Location: backend/utils/db.js
startLine: 4
endLine: 9

We use JSON files for data storage:
- users.json: Stores user profiles and achievements
- purchases.json: Records of product purchases
- reviews.json: Product reviews and peer reviews
- badges.json: Badge awards and criteria

2. DATABASE OPERATIONS
---------------------
Location: backend/utils/db.js
startLine: 31
endLine: 60

Core CRUD operations:
- create(): Generates new records with unique IDs
- findOne(): Searches records by multiple criteria
- findById(): Retrieves specific record by ID
- update(): Modifies existing records

3. REVIEW SUBMISSION PROCESS
---------------------------
Location: backend/routes/reviews.js
startLine: 6
endLine: 39

Flow:
1. Receives review submission (userId, productId, verificationCode, content)
2. Verifies purchase is valid and not previously reviewed
3. Creates new review with PENDING status
4. Marks purchase as reviewed
5. Returns created review

4. PEER REVIEW SYSTEM
--------------------
Location: backend/routes/reviews.js
startLine: 42
endLine: 105

Process:
1. Prevents self-reviews
2. Verifies reviewer purchased same product
3. Adds peer review to review record
4. If 2+ approvals:
   - Updates review status to APPROVED
   - Updates reviewer's achievement level
   - Awards appropriate badges
   - Updates user statistics

5. ACHIEVEMENT SYSTEM
-------------------
Location: backend/models/User.js
startLine: 3
endLine: 12

Tracks:
- User's approved reviews count
- Achievement levels (BRONZE to DIAMOND)
- Earned badges

6. BADGE SYSTEM
--------------
Location: backend/models/Badge.js
startLine: 4
endLine: 23

Badge Types:
- VERIFIED_REVIEWER
- HELPFUL_PEER_REVIEWER
- EXPERT_REVIEWER
- CATEGORY_SPECIALIST
- TRUSTED_VOICE

Award Criteria:
- APPROVED_REVIEW
- PEER_REVIEW
- CATEGORY_MASTERY
- CONSECUTIVE_APPROVALS

SYSTEM GOALS:
------------
1. Ensure review authenticity through purchase verification
2. Encourage community participation in review moderation
3. Reward active and helpful reviewers
4. Create self-moderating review ecosystem
5. Gamify review process with achievements and badges

DATA FLOW:
----------
1. User submits review → Verify purchase → Create review
2. Other users submit peer reviews
3. System tracks approvals
4. Automatic badge and achievement updates
5. JSON storage maintains all records