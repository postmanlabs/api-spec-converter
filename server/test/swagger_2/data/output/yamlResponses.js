const yamlResponse1 = 
`openapi: 3.0.0
info:
  description: Social media management for marketers and agencies
  title: Bufferapp
  version: '1'
  x-apisguru-categories:
    - social
    - marketing
  x-logo:
    url: >-
      https://api.apis.guru/v2/cache/logo/https_d389zggrogs7qo.cloudfront.net_images_app_buffer-logo@2x.png
  x-origin:
    - format: swagger
      url: >-
        https://raw.githubusercontent.com/APIs-guru/unofficial_openapi_specs/master/bufferapp.com/1/swagger.yaml
      version: '2.0'
  x-providerName: bufferapp.com
  x-unofficialSpec: true
servers:
  - url: 'https://api.bufferapp.com/1/'
paths:
  '/info/configuration{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/configuration'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: >-
        Returns an object with the current configuration that Buffer is using,
        including supported services, their icons and the varying limits of
        character and schedules.
  '/links/shares{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
        - description: >-
            URL-encoded URL of the page for which the number of shares is
            requested.
          in: query
          name: url
          required: true
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/shares'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: >-
        Returns an object with a the numbers of shares a link has had using
        Buffer.
  '/profiles/{id}/schedules/update{mediaTypeExtension}':
    post:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/success'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: An unknown error occurred.
      description: |
        "Set the posting schedules for the specified social media profile.
  '/profiles/{id}/schedules{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/schedules'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: >-
        Returns details of the posting schedules associated with a social media
        profile.
  '/profiles/{id}/updates/pending{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
        - description: >-
            Specifies the page of status updates to receive. If not specified
            the first page of results will be returned.
          in: query
          name: page
          schema:
            type: integer
        - description: >-
            Specifies the number of status updates to receive. If provided, must
            be between 1 and 100.
          in: query
          name: count
          schema:
            type: integer
        - description: >-
            Specifies a unix timestamp which only status updates created after
            this time will be retrieved.
          in: query
          name: since
          schema:
            format: date
            type: string
        - description: >-
            If utc is set times will be returned relative to UTC rather than the
            users associated timezone.
          in: query
          name: utc
          schema:
            type: boolean
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/updates-array'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: >
        "Returns an array of updates that are currently in the buffer for an
        individual social media profile.
  '/profiles/{id}/updates/reorder{mediaTypeExtension}':
    post:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/shuffle'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: An unknown error occurred.
      description: >
        Edit the order at which statuses for the specified social media profile
        will be sent out of the buffer.
  '/profiles/{id}/updates/sent{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
        - description: >-
            Specifies the page of status updates to receive. If not specified
            the first page of results will be returned.
          in: query
          name: page
          schema:
            type: integer
        - description: >-
            Specifies the number of status updates to receive. If provided, must
            be between 1 and 100.
          in: query
          name: count
          schema:
            type: integer
        - description: >-
            Specifies a unix timestamp which only status updates created after
            this time will be retrieved.
          in: query
          name: since
          schema:
            format: date
            type: string
        - description: >-
            If utc is set times will be returned relative to UTC rather than the
            users associated timezone.
          in: query
          name: utc
          schema:
            type: boolean
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/updates-array'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: >
        Returns an array of updates that have been sent from the buffer for an
        individual social media profile.
  '/profiles/{id}/updates/shuffle{mediaTypeExtension}':
    post:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/shuffle'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: An unknown error occurred.
      description: >
        Randomize the order at which statuses for the specified social media
        profile will be sent out of the buffer.
  '/profiles/{id}{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
        - in: path
          name: id
          required: true
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/profile'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: Returns details of the single specified social media profile.
  '/profiles{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/profiles'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: Returns an array of social media profiles connected to a users account.
  '/updates/create{mediaTypeExtension}':
    post:
      parameters:
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/newUpdate'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: An unknown error occurred.
      description: |
        Create one or more new status updates.
  '/updates/{id}/destroy{mediaTypeExtension}':
    post:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/success'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: An unknown error occurred.
      description: Permanently delete an existing status update.
  '/updates/{id}/interactions{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
        - description: >
            Specifies a type of event to be retrieved, for example "retweet",
            "like", "comment", "mention" or "reshare". They can also be plural
            (e.g., "reshares"). Plurality has no effect other than visual
            semantics. See /info/configuration for more information on supported
            interaction events.
          in: query
          name: event
          required: true
          schema:
            type: string
        - description: >-
            Specifies the page of status updates to receive. If not specified
            the first page of results will be returned.
          in: query
          name: page
          schema:
            type: integer
        - description: >-
            Specifies the number of status updates to receive. If provided, must
            be between 1 and 100.
          in: query
          name: count
          schema:
            type: integer
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/interactions'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: >
        Returns the detailed information on individual interactions with the
        social media update such as favorites, retweets and likes.
  '/updates/{id}/move_to_top{mediaTypeExtension}':
    post:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/update'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: An unknown error occurred.
      description: >-
        Move an existing status update to the top of the queue and recalculate
        times for all updates in the queue. Returns the update with its new
        posting time.
  '/updates/{id}/share{mediaTypeExtension}':
    post:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/success'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: An unknown error occurred.
      description: >-
        Immediately shares a single pending update and recalculates times for
        updates remaining in the queue.
  '/updates/{id}/update{mediaTypeExtension}':
    post:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/individual-update'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: An unknown error occurred.
      description: |
        Edit an existing, individual status update.
  '/updates/{id}{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
        - in: path
          name: id
          required: true
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/update'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: Returns a single social media update.
  '/user{mediaTypeExtension}':
    get:
      parameters:
        - in: path
          name: mediaTypeExtension
          required: true
          schema:
            enum:
              - .json
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/user'
          description: OK
        '400':
          description: >
            1003  Parameter not recognized.

            1004  Required parameter missing.

            1006  Parameter value not within bounds.

            1012  Profile did not save successfully.

            1016  Profile buffer could not be emptied.

            1022  Update did not save successfully.

            1025  Update was recently posted, can't post duplicate content.

            1026  Update must be in error status to requeue.

            1027  Update must be in buffer and not custom scheduled in order to
            move to top.

            1029  Event type not supported.

            1030  Media filetype not supported.

            1031  Media filesize out of acceptable range.

            1032  Unable to post image to LinkedIn group(s).

            1034  Cannot schedule updates in the past.

            1033  Comments can only be posted to Facebook at this time.

            1042  User did not save successfully.
        '403':
          description: |
            403  Permission denied.
            1001  Access token required.
            1002  Not within application scope.
            1011  No authorization to access profile.
            1013  Profile schedule limit reached.
            1014  Profile limit for user has been reached.
            1015  Profile could not be destroyed.
            1021  No authorization to access update.
            1023  Update limit for profile has been reached.
            1024  Update limit for team profile has been reached.
            1028  Update soft limit for profile reached.
            1051  No authorization to access client.
        '404':
          description: |
            404  Endpoint not found.
            1010  Profile could not be found.
            1020  Update could not be found.
            1050  Client could not be found.
        '405':
          description: |
            405  Method not allowed.
        '406':
          description: |
            1005  Unsupported response format.
        '500':
          description: |
            An unknown error occurred.
      description: Returns a single user.
components:
  schemas:
    configuration:
      properties:
        media:
          properties:
            picture_filetypes:
              items:
                type: string
              type: array
            picture_size_max:
              type: number
            picture_size_min:
              type: number
          type: object
        services:
          properties:
            appdotnet:
              properties:
                types:
                  properties:
                    profile:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items: {}
                          type: array
                      type: object
                  type: object
                urls:
                  properties:
                    hashtag:
                      type: string
                    user:
                      type: string
                  type: object
              type: object
            facebook:
              properties:
                types:
                  properties:
                    group:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                    page:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                    profile:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                  type: object
                urls:
                  properties:
                    user:
                      type: string
                  type: object
              type: object
            google:
              properties:
                types:
                  properties:
                    page:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                    profile:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                  type: object
                urls:
                  properties:
                    user:
                      type: string
                  type: object
              type: object
            linkedin:
              properties:
                types:
                  properties:
                    group:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                    page:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                    profile:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                  type: object
                urls:
                  properties:
                    user:
                      type: string
                  type: object
              type: object
            twitter:
              properties:
                types:
                  properties:
                    profile:
                      properties:
                        character_limit:
                          type: number
                        icons:
                          properties:
                            '16':
                              type: string
                            '32':
                              type: string
                            '64':
                              type: string
                          type: object
                        link_attachments:
                          type: boolean
                        name:
                          type: string
                        schedule_limit:
                          type: number
                        supported_interactions:
                          items:
                            type: string
                          type: array
                      type: object
                  type: object
                urls:
                  properties:
                    cashtag:
                      type: string
                    hashtag:
                      type: string
                    user:
                      type: string
                  type: object
              type: object
          type: object
      type: object
    individual-update:
      properties:
        buffer_count:
          type: number
        buffer_percentage:
          type: number
        success:
          type: boolean
        update:
          properties:
            client_id:
              type: string
            created_at:
              type: number
            day:
              type: string
            due_at:
              type: number
            due_time:
              type: string
            id:
              type: string
            media:
              properties:
                description:
                  type: string
                link:
                  type: string
                title:
                  type: string
              type: object
            profile_id:
              type: string
            profile_service:
              type: string
            status:
              type: string
            text:
              type: string
            text_formatted:
              type: string
            user_id:
              type: string
            via:
              type: string
          type: object
      type: object
    interactions:
      properties:
        interactions:
          items:
            properties:
              _id:
                type: string
              created_at:
                type: number
              event:
                type: string
              id:
                type: string
              interaction_id:
                type: string
              user:
                properties:
                  avatar:
                    type: string
                  avatar_https:
                    type: string
                  followers:
                    type: number
                  twitter_id:
                    type: string
                  username:
                    type: string
                type: object
            type: object
          type: array
        total:
          type: number
      type: object
    newUpdate:
      properties:
        buffer_count:
          type: number
        buffer_percentage:
          type: number
        success:
          type: boolean
        updates:
          items:
            properties:
              created_at:
                type: number
              day:
                type: string
              due_at:
                type: number
              due_time:
                type: string
              id:
                type: string
              media:
                properties:
                  description:
                    type: string
                  link:
                    type: string
                  title:
                    type: string
                type: object
              profile_id:
                type: string
              profile_service:
                type: string
              status:
                type: string
              text:
                type: string
              text_formatted:
                type: string
              user_id:
                type: string
              via:
                type: string
            type: object
          type: array
      type: object
    profile:
      properties:
        avatar:
          type: string
        created_at:
          type: number
        default:
          type: boolean
        formatted_username:
          type: string
        id:
          type: string
        schedules:
          items:
            properties:
              days:
                items:
                  type: string
                type: array
              times:
                items:
                  type: string
                type: array
            type: object
          type: array
        service:
          type: string
        service_id:
          type: string
        service_username:
          type: string
        statistics:
          properties:
            followers:
              type: number
          type: object
        team_members:
          items:
            type: string
          type: array
        timezone:
          type: string
        user_id:
          type: string
      type: object
    profiles:
      items:
        properties:
          _id:
            type: string
          avatar:
            type: string
          avatar_https:
            type: string
          counts:
            properties:
              daily_suggestions:
                type: number
              drafts:
                type: number
              pending:
                type: number
              sent:
                type: number
            type: object
          cover_photo:
            type: string
          default:
            type: boolean
          disabled_features:
            items: {}
            type: array
          disconnected:
            type: string
          formatted_service:
            type: string
          formatted_username:
            type: string
          has_used_suggestions:
            type: boolean
          id:
            type: string
          schedules:
            items:
              properties:
                days:
                  items:
                    type: string
                  type: array
                times:
                  items: {}
                  type: array
              type: object
            type: array
          service:
            type: string
          service_id:
            type: string
          service_type:
            type: string
          service_username:
            type: string
          shortener:
            properties:
              domain:
                type: string
            type: object
          statistics:
            properties:
              connections:
                type: number
            type: object
          timezone:
            type: string
          user_id:
            type: string
          utm_tracking:
            type: string
          verb:
            type: string
        type: object
      type: array
    reorder:
      properties:
        success:
          type: boolean
        updates:
          items:
            properties:
              created_at:
                type: number
              day:
                type: string
              due_at:
                type: number
              due_time:
                type: string
              id:
                type: string
              profile_id:
                type: string
              profile_service:
                type: string
              status:
                type: string
              text:
                type: string
              text_formatted:
                type: string
              user_id:
                type: string
              via:
                type: string
            type: object
          type: array
      type: object
    schedules:
      properties:
        days:
          items:
            type: string
          type: array
        times:
          items:
            type: string
          type: array
      type: object
    schedules-update:
      properties:
        success:
          type: boolean
      type: object
    share:
      properties:
        success:
          type: boolean
      type: object
    shares:
      properties:
        shares:
          type: number
      type: object
    shuffle:
      properties:
        success:
          type: boolean
        updates:
          items:
            properties:
              created_at:
                type: number
              day:
                type: string
              due_at:
                type: number
              due_time:
                type: string
              id:
                type: string
              profile_id:
                type: string
              profile_service:
                type: string
              status:
                type: string
              text:
                type: string
              text_formatted:
                type: string
              user_id:
                type: string
              via:
                type: string
            type: object
          type: array
      type: object
    success:
      properties:
        success:
          type: boolean
      type: object
    update:
      properties:
        created_at:
          type: number
        day:
          type: string
        due_at:
          type: number
        due_time:
          type: string
        id:
          type: string
        profile_id:
          type: string
        profile_service:
          type: string
        sent_at:
          type: number
        service_update_id:
          type: string
        statistics:
          properties:
            clicks:
              type: number
            favorites:
              type: number
            mentions:
              type: number
            reach:
              type: number
            retweets:
              type: number
          type: object
        status:
          type: string
        text:
          type: string
        text_formatted:
          type: string
        user_id:
          type: string
        via:
          type: string
      type: object
    updates-array:
      properties:
        total:
          type: number
        updates:
          items:
            properties:
              created_at:
                type: number
              day:
                type: string
              due_at:
                type: number
              due_time:
                type: string
              id:
                type: string
              profile_id:
                type: string
              profile_service:
                type: string
              status:
                type: string
              text:
                type: string
              text_formatted:
                type: string
              user_id:
                type: string
              via:
                type: string
            type: object
          type: array
      type: object
    user:
      properties:
        _id:
          type: string
        activity_at:
          type: number
        created_at:
          type: number
        id:
          type: string
        plan:
          type: string
        referral_link:
          type: string
        referral_token:
          type: string
        secret_email:
          type: string
        timezone:
          type: string
      type: object
  securitySchemes:
    oauth_2_0:
      description: >
        Body example for authorisation request:


        client_id=...&

        redirect_uri=...&

        response_type=code


        Bidy example for token request:


        POST Data

        client_id=...&

        client_secret=...&

        redirect_uri=...&

        code=...&

        grant_type=authorization_code


        All requests to the Buffer API must be made using HTTPS, with the access
        token provided in the HTTP Authorization header, request body or query
        string.
      flows:
        authorizationCode:
          authorizationUrl: 'https://bufferapp.com/oauth2/authorize'
          scopes: {}
          tokenUrl: 'https://api.bufferapp.com/1/oauth2/token.json'
      type: oauth2
externalDocs:
  url: 'https://buffer.com/developers/api'
`

const yamlResponse2 = 
`openapi: 3.0.0
info:
  title: dbaas
  version: Unknown
servers: []
paths:
  /:
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "versions": [
                            {
                                "status": "CURRENT",
                                "updated": "2012-01-01T00:00:00Z",
                                "id": "v1.0",
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/",
                                        "rel": "self"
                                    }
                                ]
                            }
                        ]
                    }
          description: 200 response
      description: |
        Lists information about all Database Service API versions.
      operationId: getVersions
      summary: List versions
  /v1.0:
    get:
      responses:
        '202':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "versions": [
                            {
                                "status": "CURRENT",
                                "updated": "2012-08-01T00:00:00Z",
                                "id": "v1.0",
                                "links": [
                                    {
                                        "href": "http://23.253.228.211:8779/v1.0/",
                                        "rel": "self"
                                    }
                                ]
                            }
                        ]
                    }
          description: 202 response
      description: |
        Shows details for the Database Service API v1.0.
      operationId: getVersionInfo
      summary: Show version details
  '/v1.0/{accountId}/flavors':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "flavors": [
                            {
                                "ram": 512,
                                "id": 1,
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/1234/flavors/1",
                                        "rel": "self"
                                    },
                                    {
                                        "href": "https://openstack.example.com/flavors/1",
                                        "rel": "bookmark"
                                    }
                                ],
                                "name": "m1.tiny"
                            },
                            {
                                "ram": 1024,
                                "id": 2,
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/1234/flavors/2",
                                        "rel": "self"
                                    },
                                    {
                                        "href": "https://openstack.example.com/flavors/2",
                                        "rel": "bookmark"
                                    }
                                ],
                                "name": "m1.small"
                            },
                            {
                                "ram": 2048,
                                "id": 3,
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/1234/flavors/3",
                                        "rel": "self"
                                    },
                                    {
                                        "href": "https://openstack.example.com/flavors/3",
                                        "rel": "bookmark"
                                    }
                                ],
                                "name": "m1.medium"
                            },
                            {
                                "ram": 4096,
                                "id": 4,
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/1234/flavors/4",
                                        "rel": "self"
                                    },
                                    {
                                        "href": "https://openstack.example.com/flavors/4",
                                        "rel": "bookmark"
                                    }
                                ],
                                "name": "m1.large"
                            }
                        ]
                    }
          description: 200 response
      description: |
        Lists information for all available flavors.
      operationId: getFlavors
      summary: List flavors
  '/v1.0/{accountId}/flavors/{flavorId}':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
      - description: |
          The flavor ID for the specified flavor.
        in: path
        name: flavorId
        required: true
        schema:
          type: string
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "flavor": {
                            "ram": 512,
                            "id": 1,
                            "links": [
                                {
                                    "href": "https://openstack.example.com/v1.0/1234/flavors/1",
                                    "rel": "self"
                                },
                                {
                                    "href": "https://openstack.example.com/flavors/1",
                                    "rel": "bookmark"
                                }
                            ],
                            "name": "m1.tiny"
                        }
                    }
          description: 200 response
      description: |
        Shows flavor details.
      operationId: getFlavorById
      summary: Show flavor details
  '/v1.0/{accountId}/instances':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "instances": [
                            {
                                "status": "ACTIVE",
                                "name": "json_rack_instance",
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/1234/instances/28d1b8f3-172a-4f6d-983d-36021508444a",
                                        "rel": "self"
                                    },
                                    {
                                        "href": "https://openstack.example.com/instances/28d1b8f3-172a-4f6d-983d-36021508444a",
                                        "rel": "bookmark"
                                    }
                                ],
                                "volume": {
                                    "size": 2
                                },
                                "flavor": {
                                    "id": "1",
                                    "links": [
                                        {
                                            "href": "https://openstack.example.com/v1.0/1234/flavors/1",
                                            "rel": "self"
                                        },
                                        {
                                            "href": "https://openstack.example.com/flavors/1",
                                            "rel": "bookmark"
                                        }
                                    ]
                                },
                                "id": "28d1b8f3-172a-4f6d-983d-36021508444a"
                            },
                            {
                                "status": "ACTIVE",
                                "name": "xml_rack_instance",
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/1234/instances/8fb081af-f237-44f5-80cc-b46be1840ca9",
                                        "rel": "self"
                                    },
                                    {
                                        "href": "https://openstack.example.com/instances/8fb081af-f237-44f5-80cc-b46be1840ca9",
                                        "rel": "bookmark"
                                    }
                                ],
                                "volume": {
                                    "size": 2
                                },
                                "flavor": {
                                    "id": "1",
                                    "links": [
                                        {
                                            "href": "https://openstack.example.com/v1.0/1234/flavors/1",
                                            "rel": "self"
                                        },
                                        {
                                            "href": "https://openstack.example.com/flavors/1",
                                            "rel": "bookmark"
                                        }
                                    ]
                                },
                                "id": "8fb081af-f237-44f5-80cc-b46be1840ca9"
                            }
                        ]
                    }
          description: 200 response
      description: |
        Lists information, including status, for all database instances.
      operationId: getInstance
      summary: List database instances
    post:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "instance": {
                            "status": "BUILD",
                            "updated": "2012-01-25T21:53:10Z",
                            "name": "json_rack_instance",
                            "links": [
                                {
                                    "href": "https://openstack.example.com/v1.0/1234/instances/dea5a2f7-3ec7-4496-adab-0abb5a42d635",
                                    "rel": "self"
                                },
                                {
                                    "href": "https://openstack.example.com/instances/dea5a2f7-3ec7-4496-adab-0abb5a42d635",
                                    "rel": "bookmark"
                                }
                            ],
                            "created": "2012-01-25T21:53:09Z",
                            "hostname": "e09ad9a3f73309469cf1f43d11e79549caf9acf2.rackspaceclouddb.com",
                            "volume": {
                                "size": 2
                            },
                            "flavor": {
                                "id": "1",
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/1234/flavors/1",
                                        "rel": "self"
                                    },
                                    {
                                        "href": "https://openstack.example.com/flavors/1",
                                        "rel": "bookmark"
                                    }
                                ]
                            },
                            "id": "dea5a2f7-3ec7-4496-adab-0abb5a42d635"
                        }
                    }
          description: 200 response
      description: |
        Creates a database instance.
      operationId: createInstance
      summary: Create database instance
  '/v1.0/{accountId}/instances/{instanceId}':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
      - description: |
          The instance ID for the specified database instance.
        in: path
        name: instanceId
        required: true
        schema:
          type: string
    delete:
      responses:
        '202':
          description: 202 response
      description: |
        Deletes a specified database instance, including any associated data.
      operationId: deleteInstance
      summary: Delete database instance
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "instance": {
                            "status": "ACTIVE",
                            "updated": "2012-03-28T21:34:25Z",
                            "name": "xml_rack_instance",
                            "links": [
                                {
                                    "href": "https://openstack.example.com/v1.0/1234/instances/2450c73f-7805-4afe-a42c-4094ab42666b",
                                    "rel": "self"
                                },
                                {
                                    "href": "https://openstack.example.com/instances/2450c73f-7805-4afe-a42c-4094ab42666b",
                                    "rel": "bookmark"
                                }
                            ],
                            "created": "2012-03-28T21:31:02Z",
                            "hostname": "e09ad9a3f73309469cf1f43d11e79549caf9acf2.rackspaceclouddb.com",
                            "volume": {
                                "used": 0.124542236328125,
                                "size": 2
                            },
                            "flavor": {
                                "id": "1",
                                "links": [
                                    {
                                        "href": "https://openstack.example.com/v1.0/1234/flavors/1",
                                        "rel": "self"
                                    },
                                    {
                                        "href": "https://openstack.example.com/flavors/1",
                                        "rel": "bookmark"
                                    }
                                ]
                            },
                            "id": "2450c73f-7805-4afe-a42c-4094ab42666b"
                        }
                    }
          description: 200 response
      description: |
        Shows database instance details.
      operationId: getInstanceById
      summary: Show database instance details
  '/v1.0/{accountId}/instances/{instanceId}/action':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
      - description: |
          The instance ID for the specified database instance.
        in: path
        name: instanceId
        required: true
        schema:
          type: string
    post:
      responses:
        '202':
          description: 202 response
      description: |
        Restarts the database service on an instance.
      operationId: restartInstance
      summary: Restart instance
  '/v1.0/{accountId}/instances/{instanceId}/databases':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
      - description: |
          The instance ID for the specified database instance.
        in: path
        name: instanceId
        required: true
        schema:
          type: string
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "databases": [
                            {
                                "name": "anotherexampledb"
                            },
                            {
                                "name": "exampledb"
                            },
                            {
                                "name": "nextround"
                            },
                            {
                                "name": "sampledb"
                            },
                            {
                                "name": "testingdb"
                            }
                        ]
                    }
          description: 200 response
      description: |
        Lists databases for a specified instance.
      operationId: getDatabases
      summary: List instance databases
    post:
      responses:
        '202':
          description: 202 response
      description: |
        Creates a database within a specified instance.
      operationId: createDatabase
      summary: Create database
  '/v1.0/{accountId}/instances/{instanceId}/databases/{databaseName}':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
      - description: |
          The instance ID for the specified database instance.
        in: path
        name: instanceId
        required: true
        schema:
          type: string
      - description: |
          The name for the specified database.
        in: path
        name: databaseName
        required: true
        schema:
          type: string
    delete:
      responses:
        '202':
          description: 202 response
      description: |
        Deletes a specified database.
      operationId: deleteDatabase
      summary: Delete database
  '/v1.0/{accountId}/instances/{instanceId}/root':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
      - description: |
          The instance ID for the specified database instance.
        in: path
        name: instanceId
        required: true
        schema:
          type: string
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "rootEnabled": true
                    }
          description: 200 response
      description: |
        Shows root-enabled status for a database instance.
      operationId: isRootEnabled
      summary: Show root-enabled status for database instance
    post:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "user": {
                            "password": "secretsecret",
                            "name": "root"
                        }
                    }
          description: 200 response
      description: >
        Enables the root user for a specified database instance and returns the
        root password.
      operationId: createRoot
      summary: Enable root user
  '/v1.0/{accountId}/instances/{instanceId}/users':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
      - description: |
          The instance ID for the specified database instance.
        in: path
        name: instanceId
        required: true
        schema:
          type: string
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                response:
                  value: |-
                    {
                        "users": [
                            {
                                "name": "dbuser3",
                                "databases": [
                                    {
                                        "name": "databaseA"
                                    }
                                ]
                            },
                            {
                                "name": "dbuser4",
                                "databases": [
                                    {
                                        "name": "databaseB"
                                    },
                                    {
                                        "name": "databaseC"
                                    }
                                ]
                            }
                        ]
                    }
          description: 200 response
      description: |
        Lists the users in a specified database instance.
      operationId: getUsers
      summary: List database instance users
    post:
      responses:
        '202':
          description: 202 response
      description: |
        Creates a user for a specified database instance.
      operationId: createUser
      summary: Create user
  '/v1.0/{accountId}/instances/{instanceId}/users/{name}':
    parameters:
      - description: |
          The account ID of the owner of the specified instance.
        in: path
        name: accountId
        required: true
        schema:
          type: string
      - description: |
          The instance ID for the specified database instance.
        in: path
        name: instanceId
        required: true
        schema:
          type: string
      - description: |
          The name for the specified user.
        in: path
        name: name
        required: true
        schema:
          type: string
    delete:
      responses:
        '202':
          description: 202 response
      description: |
        Deletes a specified user for a specified database instance.
      operationId: deleteUser
      summary: Delete user
`

module.exports = {
  yamlResponse1,
  yamlResponse2,
}